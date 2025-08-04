Promise.all([
  fetch('/header.html').then(res => res.text()),
  fetch('/footer.html').then(res => res.text())
]).then(([header, footer]) => {
  document.getElementById('header-placeholder').innerHTML = header;
  document.getElementById('footer-placeholder').innerHTML = footer;
});


