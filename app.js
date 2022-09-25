// https://www.omnicalculator.com/health/shock-index

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const shockindexRadio = document.getElementById('shockindexRadio');
const heartrateRadio = document.getElementById('heartrateRadio');
const systolicbloodpressureRadio = document.getElementById('systolicbloodpressureRadio');

let shockindex;
let heartrate = v1;
let systolicbloodpressure = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

shockindexRadio.addEventListener('click', function() {
  variable1.textContent = 'Heart rate';
  variable2.textContent = 'Systolic blood pressure';
  heartrate = v1;
  systolicbloodpressure = v2;
  result.textContent = '';
});

heartrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Shock index';
  variable2.textContent = 'Systolic blood pressure';
  shockindex = v1;
  systolicbloodpressure = v2;
  result.textContent = '';
});

systolicbloodpressureRadio.addEventListener('click', function() {
  variable1.textContent = 'Shock index';
  variable2.textContent = 'Heart rate';
  shockindex = v1;
  heartrate = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(shockindexRadio.checked)
    result.textContent = `Shock index = ${computeshockindex().toFixed(2)}`;

  else if(heartrateRadio.checked)
    result.textContent = `Heart rate = ${computeheartrate().toFixed(2)}`;

  else if(systolicbloodpressureRadio.checked)
    result.textContent = `Systolic blood pressure = ${computesystolicbloodpressure().toFixed(2)}`;
})

// calculation

function computeshockindex() {
  return Number(heartrate.value) / Number(systolicbloodpressure.value);
}

function computeheartrate() {
  return Number(shockindex.value) * Number(systolicbloodpressure.value);
}

function computesystolicbloodpressure() {
  return Number(heartrate.value) / Number(shockindex.value);
}