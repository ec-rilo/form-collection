const ddLogic = (() => {
  const hamBtn = document.querySelector('.nav-icon4');
  const ddMenu = document.querySelector('.dd-menu');

  function toggleDDMenu() {
    ddMenu.classList.toggle('open-dd');
  }

  hamBtn.addEventListener('click', () => {
    ddMenu.classList.toggle('open-dd');
  });
})();

export default ddLogic;
