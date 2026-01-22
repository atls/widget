use tauri::{ActivationPolicy, Manager, Runtime};
use tauri::tray::{TrayIconBuilder, TrayIconEvent};
use tauri::image::Image;

#[cfg(target_os = "macos")]
use tauri::Position;

fn load_tray_icon() -> Image<'static> {
  let bytes = include_bytes!("../icons/tray.png");
  let img = image::load_from_memory(bytes)
    .expect("failed to load icon")
    .to_rgba8();
  let (width, height) = img.dimensions();
  Image::new_owned(img.into_raw(), width, height)
}

fn toggle_window<R: Runtime>(app: &tauri::AppHandle<R>) {
  if let Some(window) = app.get_webview_window("main") {
    let is_visible = window.is_visible().unwrap_or(false);
    if is_visible {
      let _ = window.hide();
    } else {
      #[cfg(target_os = "macos")]
      {
        if let Some(tray) = app.tray_by_id("main_tray") {
          if let Ok(Some(rect)) = tray.rect() {
            let win_size = window.outer_size().unwrap_or(tauri::PhysicalSize::new(400, 300));
            
            // Извлекаем координаты из tauri::Position и tauri::Size
            let (tray_x, tray_y) = match rect.position {
                tauri::Position::Physical(p) => (p.x as f64, p.y as f64),
                tauri::Position::Logical(p) => (p.x, p.y),
            };
            
            let (tray_w, tray_h) = match rect.size {
                tauri::Size::Physical(s) => (s.width as f64, s.height as f64),
                tauri::Size::Logical(s) => (s.width, s.height),
            };

            // Центрируем окно под иконкой
            let x = tray_x + (tray_w / 2.0) - (win_size.width as f64 / 2.0);
            let y = tray_y + tray_h;
            
            let _ = window.set_position(tauri::PhysicalPosition::new(x, y));
          }
        }
      }
      let _ = window.show();
      let _ = window.set_focus();
    }
  }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  println!("[boot] app start");

  tauri::Builder::default()
    .setup(|app| {
      println!("[setup] entered");

      #[cfg(target_os = "macos")]
      {
        println!("[setup] set ActivationPolicy::Accessory");
        app.set_activation_policy(ActivationPolicy::Accessory);
        
        // Скрываем окно при потере фокуса
        if let Some(window) = app.get_webview_window("main") {
          let w_clone = window.clone();
          window.on_window_event(move |event| {
            if let tauri::WindowEvent::Focused(false) = event {
              let _ = w_clone.hide();
            }
          });
        }
      }

      let icon = load_tray_icon();

      println!("[tray] building tray icon");

      let _tray = TrayIconBuilder::with_id("main_tray")
        .tooltip("Widget")
        .icon(icon)
        .on_tray_icon_event(|tray, event| {
          match event {
            TrayIconEvent::Click {
              button: tauri::tray::MouseButton::Left,
              ..
            } => {
              let app = tray.app_handle();
              toggle_window(app);
            }
            _ => {}
          }
        })
        .build(app)?;

      println!("[tray] tray created");
      println!("[setup] completed");
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
