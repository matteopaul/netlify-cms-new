export function bind (element, events, handler) {
  if (element) {
    events.forEach((e) => element.addEventListener(e, handler));
  }
}

export function unbind (element, events, handler) {
  if (element) {
    events.forEach((e) => element.removeEventListener(e, handler));
  }
}
