const hamburgerButton = document.querySelector('.navbar-toggler');
const hamburgerIcon = document.querySelector('.navbar-toggler img');

const hamburgerClickHandler = (e) => {
  (!hamburgerButton.classList.contains('collapsed'))
  ? hamburgerIcon.src = './images/icon-close-menu.svg'
  : hamburgerIcon.src = './images/icon-hamburger.svg';
}

const selectChangeHandler = () => {
  const listSelect = document.querySelectorAll('#modal-1 input[type="radio"]:not(input[disabled])');
  listSelect.forEach((elm) => {
    const parent = elm.parentElement.parentElement;
    const modalFooter = parent.querySelector('.modal-footer');
    if (elm.checked) {
      parent.style.border = '2px solid hsl(176, 50%, 47%)'
      modalFooter.classList.remove('d-none');
    } else {
      modalFooter.classList.add('d-none');
      parent.style.border = '1px solid rgba(0,0,0,.125)'
    }
  })
}

const selectHandler = (index) => {
  const listSelect = document.querySelectorAll('#modal-1 input[type="radio"]:not(input[disabled])');
  listSelect[index].checked = true;
  selectChangeHandler();
}