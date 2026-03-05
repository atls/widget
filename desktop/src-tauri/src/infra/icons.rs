use tauri::image::Image;

pub fn load_tray_icon() -> Image<'static> {
 let bytes = include_bytes!("../../icons/tray.png");
  let img = image::load_from_memory(bytes)
    .expect("failed to load tray icon")
    .to_rgba8();

  let (width, height) = img.dimensions();
  Image::new_owned(img.into_raw(), width, height)
}
