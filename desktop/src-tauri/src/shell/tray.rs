use tauri::tray::{TrayIconBuilder, TrayIconEvent};
use tauri::ActivationPolicy;

use crate::config::constants::*;
use crate::infra::icons;
use crate::shell::window;

#[cfg(target_os = "macos")]
use tauri::tray::MouseButtonState;

pub fn init<R: tauri::Runtime>(app: &mut tauri::App<R>) -> tauri::Result<()> {
  #[cfg(target_os = "macos")]
  app.set_activation_policy(ActivationPolicy::Accessory);

  let icon = icons::load_tray_icon();

  TrayIconBuilder::with_id(TRAY_ID)
    .tooltip(TRAY_TOOLTIP)
    .icon(icon)
    .on_tray_icon_event(|tray, event| {
      #[cfg(target_os = "macos")]
      let is_click = matches!(
        event,
        TrayIconEvent::Click {
          button: tauri::tray::MouseButton::Left,
          button_state: MouseButtonState::Up,
          ..
        }
      );

      #[cfg(not(target_os = "macos"))]
      let is_click = matches!(
        event,
        TrayIconEvent::Click {
          button: tauri::tray::MouseButton::Left,
          ..
        }
      );

      if is_click {
        window::toggle(tray.app_handle());
      }
    })
    .build(app)?;

  Ok(())
}
