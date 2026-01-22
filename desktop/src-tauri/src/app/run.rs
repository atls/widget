use crate::shell;

pub fn run() {
  tauri::Builder::default()
    .setup(|app| {
      shell::init(app)?;
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
