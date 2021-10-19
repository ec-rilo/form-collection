const hamBtnLogic = (() => {
  const hamBtn = document.querySelector('.nav-icon4');

  function toggleHamBtn() {
    hamBtn.classList.toggle('open');
  }

  hamBtn.addEventListener('click', () => {
    hamBtn.classList.toggle('open');
  });

  return {
    toggleHamBtn,
  };
})();

export default hamBtnLogic;
