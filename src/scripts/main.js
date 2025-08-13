document.addEventListener("DOMContentLoaded", () => {
  const TEL = "8 (800) 770-04-73";
  const TELLINK = "+78007700473";

  Promise.all([
    fetch("/header.html").then((res) => res.text()),
    fetch("/footer.html").then((res) => res.text()),
  ])
    .then(([header, footer]) => {
      const headerEl = document.getElementById("header-placeholder");
      const footerEl = document.getElementById("footer-placeholder");

      // Insert header and footer
      if (headerEl) headerEl.innerHTML = header;
      if (footerEl) footerEl.innerHTML = footer;
      const phoneLinkEl = document.getElementById("phoneLink");
      if (phoneLinkEl) {
        phoneLinkEl.textContent = TEL;
        phoneLinkEl.href = `tel:${TELLINK}`;
      } else {
        console.error("Phone link element not found");
      }
    })
    .catch((error) => {
      console.error("Error loading templates:", error);
    });
});
