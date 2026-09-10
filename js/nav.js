(function () {
  var toggle = document.querySelector("[data-nav-toggle]");
  var overlay = document.querySelector("[data-nav-overlay]");
  var page = document.body.getAttribute("data-page");

  document.querySelectorAll(".nav-list a[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === page) {
      link.classList.add("is-active");
    }
  });

  function closeNav() {
    document.body.classList.remove("nav-open");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  if (overlay) {
    overlay.addEventListener("click", closeNav);
  }

  document.querySelectorAll(".nav-list a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });
})();
