(function () {
  const contact = window.SITE_CONTACT || {};

  function bindContact(selector, value, kind) {
    const node = document.querySelector(selector);
    if (!node) return;
    const text = value || "";
    const label = node.querySelector(".label");
    const valueNode = node.querySelector(".value");
    if (valueNode) valueNode.textContent = text;
    const placeholder = text.trim().startsWith("[") || text.trim() === "";
    if (placeholder || node.tagName !== "A") return;
    if (kind === "email") node.href = "mailto:" + text;
    else if (kind === "phone") node.href = "tel:" + text.replace(/[^\d+]/g, "");
    else {
      node.href = text;
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    if (label) label.removeAttribute("aria-hidden");
  }

  bindContact("[data-contact='email']", contact.email, "email");
  bindContact("[data-contact='phone']", contact.phone, "phone");
  bindContact("[data-contact='linkedin']", contact.linkedin, "link");

  document.querySelectorAll("[data-compare]").forEach(function (block) {
    const range = block.querySelector(".compare-range");
    const top = block.querySelector(".compare-top");
    const handle = block.querySelector(".compare-handle");
    if (!range || !top || !handle) return;

    function paint(value) {
      const pct = Math.max(0, Math.min(100, Number(value)));
      top.style.clipPath = "inset(0 0 0 " + pct + "%)";
      handle.style.left = pct + "%";
    }

    paint(range.value);
    range.addEventListener("input", function () { paint(range.value); });
  });

  const dialog = document.querySelector("#lightbox");
  const lbImg = dialog.querySelector(".lb-img");
  const lbCaption = dialog.querySelector(".lb-caption");
  const frames = Array.from(document.querySelectorAll("[data-full]"));
  let index = 0;

  function show(i) {
    index = (i + frames.length) % frames.length;
    const frame = frames[index];
    const full = frame.getAttribute("data-full");
    lbImg.src = full;
    lbImg.alt = frame.getAttribute("data-caption") || frame.alt || "";
    lbCaption.textContent = lbImg.alt;
  }

  function openAt(frame) {
    const i = frames.indexOf(frame);
    if (i < 0) return;
    show(i);
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  }

  document.querySelectorAll(".shot").forEach(function (button) {
    button.addEventListener("click", function () {
      const img = button.querySelector("[data-full]");
      if (img) openAt(img);
    });
  });

  document.querySelectorAll("[data-open-compare]").forEach(function (button) {
    button.addEventListener("click", function () {
      const block = button.closest("[data-compare]");
      const board = block.querySelector("[data-full]");
      if (board) openAt(board);
    });
  });

  dialog.querySelector("[data-close]").addEventListener("click", function () {
    dialog.close();
  });
  dialog.querySelector("[data-prev]").addEventListener("click", function () { show(index - 1); });
  dialog.querySelector("[data-next]").addEventListener("click", function () { show(index + 1); });

  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  document.addEventListener("keydown", function (event) {
    if (!dialog.open) return;
    if (event.key === "ArrowLeft") show(index - 1);
    if (event.key === "ArrowRight") show(index + 1);
  });
})();
