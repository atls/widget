use std::cell::RefCell;

use tauri::ActivationPolicy;
use tray_icon::{menu::Menu, Icon, TrayIcon, TrayIconBuilder};

thread_local! {
  static TRAY: RefCell<Option<TrayIcon>> = const { RefCell::new(None) };
}

fn load_tray_icon() -> Icon {
  // путь ОТНОСИТЕЛЬНО desktop/src-tauri/src/lib.rs
  // т.е. иконка должна лежать в desktop/src-tauri/icons/tray.png
  let bytes = include_bytes!("../icons/tray.png");

  let img = image::load_from_memory(bytes)
    .expect("icons/tray.png: decode failed")
    .to_rgba8();

  let (w, h) = img.dimensions();
  Icon::from_rgba(img.into_raw(), w, h).expect("icons/tray.png: invalid rgba")
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
      }

      let menu = Menu::new();
      let icon = load_tray_icon();

      println!("[tray] building tray icon");

      let tray = TrayIconBuilder::new()
        .with_tooltip("Widget")
        .with_icon(icon)
        .with_menu(Box::new(menu))
        .build();

      match tray {
        Ok(t) => {
          TRAY.with(|cell| *cell.borrow_mut() = Some(t));
          println!("[tray] tray created");
        }
        Err(e) => {
          eprintln!("[tray] tray build failed: {:?}", e);
        }
      }

      println!("[setup] completed");
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
