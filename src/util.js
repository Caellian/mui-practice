/**
 * @param {(value: bool) => void} setter
 * @returns {EventHandler} event handler
 */
export function toggleSetter(setter) {
  return (e) => {
    let component = e.target;
    if ("checked" in component) {
      // Works at least for:
      // - checkbox
      // - radio
      setter(component.checked);
    } else {
      throw new TypeError("unandled event source in toggleSetter");
    }
  };
}
