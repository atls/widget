pub mod tray;
pub mod window;

pub fn init<R: tauri::Runtime>(app: &mut tauri::App<R>) -> tauri::Result<()> {
  tray::init(app)
}
