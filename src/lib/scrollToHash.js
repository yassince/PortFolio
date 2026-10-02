export function getScrollY() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export function scrollToHash(hash) {
  const id = String(hash || "").replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;

  const header = document.querySelector("header");
  const offset = header && header.offsetHeight ? header.offsetHeight : 88;
  let top;

  if (id === "contacMe") {
    top = Math.max(el.getBoundingClientRect().bottom + getScrollY() - window.innerHeight, 0);
  } else {
    top = Math.max(el.getBoundingClientRect().top + getScrollY() - offset, 0);
  }

  try {
    window.scrollTo({ top: top, behavior: "smooth" });
  } catch (err) {
    window.scrollTo(0, top);
  }
}
