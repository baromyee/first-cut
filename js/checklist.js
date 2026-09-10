(function () {
  var root = document.querySelector("[data-checklist]");
  if (!root) return;

  var key = root.getAttribute("data-checklist") || "first-cut-practice";
  var boxes = Array.prototype.slice.call(root.querySelectorAll('input[type="checkbox"]'));
  var progress = document.querySelector("[data-checklist-progress]");

  try {
    var saved = JSON.parse(localStorage.getItem(key) || "{}");
    boxes.forEach(function (box, index) {
      box.checked = Boolean(saved[index]);
    });
  } catch (err) {
    /* ignore broken storage */
  }

  function update() {
    var state = {};
    var done = 0;
    boxes.forEach(function (box, index) {
      state[index] = box.checked;
      if (box.checked) done += 1;
    });
    localStorage.setItem(key, JSON.stringify(state));
    if (progress) {
      progress.textContent = "완료 " + done + " / " + boxes.length;
    }
  }

  boxes.forEach(function (box) {
    box.addEventListener("change", update);
  });

  update();
})();
