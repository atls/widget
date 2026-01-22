use tauri::{Manager, Runtime};
use crate::config::constants::*;

pub fn toggle<R: Runtime>(app: &tauri::AppHandle<R>) {
  if let Some(window) = app.get_webview_window(MAIN_WINDOW_LABEL) {
    let visible = window.is_visible().unwrap_or(false);

    if visible {
      let _ = window.hide();
    } else {
      #[cfg(target_os = "macos")]
      {
        if let Some(tray) = app.tray_by_id(TRAY_ID) {
          if let Ok(Some(rect)) = tray.rect() {
            let size = window
              .outer_size()
              .unwrap_or(tauri::PhysicalSize::new(WINDOW_WIDTH, WINDOW_HEIGHT));

            let (tray_x, tray_y) = match rect.position {
              tauri::Position::Physical(p) => (p.x as f64, p.y as f64),
              tauri::Position::Logical(p) => (p.x, p.y),
            };

            let (tray_w, tray_h) = match rect.size {
              tauri::Size::Physical(s) => (s.width as f64, s.height as f64),
              tauri::Size::Logical(s) => (s.width, s.height),
            };

            let x = tray_x + (tray_w / 2.0) - (size.width as f64 / 2.0);
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
