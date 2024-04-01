(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
(() => {
  const openModalBtn = document.querySelector("[data-modal-open]");
  const closeModalBtn = document.querySelector("[data-modal-close]");
  const modalBackdrop = document.querySelector("[data-modal]");
  const modal = document.querySelector(".modal");

  openModalBtn.addEventListener("click", () => {
    modalBackdrop.classList.remove("is-hidden");
    modal.classList.remove("is-hidden");
  });

  closeModalBtn.addEventListener("click", () => {
    modalBackdrop.classList.add("is-hidden");
    modal.classList.add("is-hidden");
  });
})();
