const submit = document.querySelector('#submit');
const form = document.querySelector('.card-form');
const cardForm = document.querySelector('#continue');
const submited = document.querySelector('.submited');
const cardNum = document.querySelector('#card-infonum');
const cardname = document.querySelector('#card-infoname');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvc = document.querySelector('#cvc');


document.querySelector('#input-num').addEventListener('keydown', (e) => {
  e.target.value = e.target.value.replace(/(\d{4})(\d+)/g, '$1 $2')
})


function update() {
  const cardNum = document.querySelector('#card-infonum');
  const inputCardNum = document.querySelector('#input-num');
  const NumError = document.querySelector('#error-card-no');
  const submited = document.querySelector('.submited');
  const num = /[A-Za-z]/;
  submited.style.display = 'flex';
  form.style.display = 'none';

  if(inputCardNum.value !== '') {

      if(!inputCardNum.value.match(num)) {
      cardNum.innerText = inputCardNum.value;
      inputCardNum.value = '';
      NumError.style.display = 'none';
    } else {
      NumError.style.display = 'flex';
      submited.style.display = 'none';
      form.style.display = 'grid';
    }
  } else {
    NumError.style.display = 'flex';
    submited.style.display = 'none';
    form.style.display = 'grid';
  }
  

  
  const nameInput = document.querySelector('#input-name');
  const cardname = document.querySelector('#card-infoname');
  if(nameInput.value !== '') {
    cardname.innerText = nameInput.value;
    nameInput.value = '';
  } else {
    submited.style.display = 'none';
    form.style.display = 'grid';
  }
  
  
  const month = document.querySelector('#month');
  const year = document.querySelector('#year');
  const inputMonth = document.querySelector('#input-month');
  const inputYear = document.querySelector('#input-year');
  const errorDate = document.querySelector('#error-date');

  if(inputMonth.value === '' || inputYear.value === '') {
    errorDate.style.display = 'flex';
    submited.style.display = 'none';
    form.style.display = 'grid';
  } else {
    errorDate.style.display = 'none'
    month.innerText = inputMonth.value;
    year.innerText = inputYear.value;
    inputMonth.value = '';
    inputYear.value = '';
  }
  

  const cvc = document.querySelector('#cvc');
  const inputCvc = document.querySelector('#input-cvc');
  const errorCvc = document.querySelector('#error-cvc');
  
  if(inputCvc.value === '') {
    errorCvc.style.display = 'flex';
    submited.style.display = 'none';
    form.style.display = 'grid';
  } else {
    errorCvc.style.display = 'none'
    cvc.innerText = inputCvc.value;
    inputCvc.value = '';
  }
    
}


submit.addEventListener('click', update)

cardForm.addEventListener('click', ()=> {
  submited.style.display = 'none';
  form.style.display = 'grid';
  cardname.innerText = 'JANE APPLESEED';
  cardNum.innerText = '0000 0000 0000 0000';
  month.innerText = '00';
  year.innerText ='00';
  cvc.innerText = '000';
})