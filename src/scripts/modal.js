const closeAllModal = document.querySelectorAll(".closeAllModal");
const openConsultation = document.querySelectorAll(".cosulationOpenModal");
const popupConsultation = document.querySelector(".popup-consultation");
const popup = document.querySelectorAll(".popup");

function closeAllModals() {
  popup.forEach((el) => (el.style.display = "none"));
  document.body.style.overflow = "";
}

closeAllModal.forEach((el) =>
  el.addEventListener("click", function (e) {
    closeAllModals();
  })
);

function openModalFunc(title, btn, sub) {
  popupConsultation.style.display = "block";
  const modalTitle = document.querySelector(".modal-title");
  const hiddenInputMail = document.getElementById("titleHiddenMail");
  const hiddenInputMail2 = document.getElementById("titleHiddenMail2");
  //const btnMark = document.querySelector(".btn-mark");
  hiddenInputMail.value = sub;

  if (hiddenInputMail2) {
    hiddenInputMail2.value = sub;
  }
  modalTitle.innerHTML = title;
  //  btnMark.textContent = btn;
  const form = document.getElementById("consultForm");
  //  sendForm(form);
}

openConsultation.forEach((el) =>
  el.addEventListener("click", function (e) {
    const title = e.target.dataset.title || "и получите консультацию";
    const sub = e.target.dataset.sub || "Получить консультацию";
    const btn = e.target.dataset.btn || "Получить консультацию";
    openModalFunc(title, btn, sub);
  })
);
