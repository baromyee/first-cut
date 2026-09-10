(function () {
  var input = document.querySelector("[data-shortcut-search]");
  if (!input) return;

  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-shortcut-card]"));
  var empty = document.querySelector("[data-shortcut-empty]");

  function normalize(value) {
    return (value || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function filter() {
    var q = normalize(input.value);
    var shown = 0;

    cards.forEach(function (card) {
      var hay = normalize(card.getAttribute("data-keys") + " " + card.textContent);
      var match = !q || hay.indexOf(q) !== -1;
      card.hidden = !match;
      if (match) shown += 1;
    });

    if (empty) empty.hidden = shown !== 0;
  }

  input.addEventListener("input", filter);
})();
