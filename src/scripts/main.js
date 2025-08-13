document.addEventListener("DOMContentLoaded", () => {
  Promise.all([
    fetch("/header.html").then((res) => res.text()),
    fetch("/footer.html").then((res) => res.text()),
  ])
    .then(([header, footer]) => {
      const headerEl = document.getElementById("header-placeholder");
      const footerEl = document.getElementById("footer-placeholder");

      if (headerEl) headerEl.innerHTML = header;
      if (footerEl) footerEl.innerHTML = footer;
    })
    .catch((error) => {
      console.error("Error loading templates:", error);
    });
});
