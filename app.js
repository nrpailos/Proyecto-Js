// Variables Globales
const date = dayjs();
const formularioUI = document.getElementById('formulario');
const listaGastosUI = document.getElementById('listaGastos');
const totalGastos = document.getElementById('totalGastos');
let arrayGastos = [];

// VARIABLES DEL CONVERSOR 
const monedaUno = document.getElementById('moneda-uno');
const monedaDos = document.getElementById('moneda-dos');
const cantidadUno = document.getElementById('cantidad-uno');
const cantidadDos = document.getElementById('cantidad-dos');
const cambio = document.getElementById('cambio');
const taza = document.getElementById('taza');
const total = document.getElementById('total')


//FUNCIONES
let crearItem = (gasto, descripcion, date) => {
    let item = {
        gasto: parseInt(gasto),
        descripcion: descripcion,
        date: date,

    }

    arrayGastos.push(item);

    return item;

}

sumarGastos = () => {
    let gasto = document.getElementById('gastos').value
    let total = 0
    arrayGastos.forEach(e => {
        total += e.gasto
    })

    if (total == 0) {
        Swal.fire('No se ingresaron gastos mensuales')
    } else {
        totalGastos.innerHTML += `<div class="alert alert-danger" role="alert">
        <div class="container">
            <div class="moneda">
                <select id="moneda-uno">
                    <option value="AED">AED</option>
                    <option value="ARS" selected>ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="BSD">BSD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CLP">CLP</option>
                    <option value="CNY">CNY</option>
                    <option value="COP">COP</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="DOP">DOP</option>
                    <option value="EGP">EGP</option>
                    <option value="EUR">EUR</option>
                    <option value="FJD">FJD</option>
                    <option value="GBP">GBP</option>
                    <option value="GTQ">GTQ</option>
                    <option value="HKD">HKD</option>
                    <option value="HRK">HRK</option>
                    <option value="HUF">HUF</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="ISK">ISK</option>
                    <option value="JPY">JPY</option>
                    <option value="KRW">KRW</option>
                    <option value="KZT">KZT</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PAB">PAB</option>
                    <option value="PEN">PEN</option>
                    <option value="PHP">PHP</option>
                    <option value="PKR">PKR</option>
                    <option value="PLN">PLN</option>
                    <option value="PYG">PYG</option>
                    <option value="RON">RON</option>
                    <option value="RUB">RUB</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TRY">TRY</option>
                    <option value="TWD">TWD</option>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>
                </select>
                <input type="number" id="cantidad-uno" placeholder="0" value="${total}">
            </div>
            <div class="cambio" id="cambio"></div>
        </div>
        <div class="moneda">
            <select id="moneda-dos">
                    <option value="AED">AED</option>
                    <option value="ARS">ARS</option>
                    <option value="AUD">AUD</option>
                    <option value="BGN">BGN</option>
                    <option value="BRL">BRL</option>
                    <option value="BSD">BSD</option>
                    <option value="CAD">CAD</option>
                    <option value="CHF">CHF</option>
                    <option value="CLP">CLP</option>
                    <option value="CNY">CNY</option>
                    <option value="COP">COP</option>
                    <option value="CZK">CZK</option>
                    <option value="DKK">DKK</option>
                    <option value="DOP">DOP</option>
                    <option value="EGP">EGP</option>
                    <option value="EUR">EUR</option>
                    <option value="FJD">FJD</option>
                    <option value="GBP">GBP</option>
                    <option value="GTQ">GTQ</option>
                    <option value="HKD">HKD</option>
                    <option value="HRK">HRK</option>
                    <option value="HUF">HUF</option>
                    <option value="IDR">IDR</option>
                    <option value="ILS">ILS</option>
                    <option value="INR">INR</option>
                    <option value="ISK">ISK</option>
                    <option value="JPY">JPY</option>
                    <option value="KRW">KRW</option>
                    <option value="KZT">KZT</option>
                    <option value="MXN">MXN</option>
                    <option value="MYR">MYR</option>
                    <option value="NOK">NOK</option>
                    <option value="NZD">NZD</option>
                    <option value="PAB">PAB</option>
                    <option value="PEN">PEN</option>
                    <option value="PHP">PHP</option>
                    <option value="PKR">PKR</option>
                    <option value="PLN">PLN</option>
                    <option value="PYG">PYG</option>
                    <option value="RON">RON</option>
                    <option value="RUB">RUB</option>
                    <option value="SAR">SAR</option>
                    <option value="SEK">SEK</option>
                    <option value="SGD">SGD</option>
                    <option value="THB">THB</option>
                    <option value="TRY">TRY</option>
                    <option value="TWD">TWD</option>
                    <option value="UAH">UAH</option>
                    <option value="USD" selected>USD</option>
                    <option value="UYU">UYU</option>
                    <option value="VND">VND</option>
                    <option value="ZAR">ZAR</option>
                </select>
            <input type="number" id="cantidad-dos" placeholder="0">
        </div>
    </div>`
            // totalGastos.innerHTML += `<div class="alert alert-danger" role="alert"><i class="material-icons float-left mr-2"></i><b> TOTAL GASTOS DEL MES: ${total}</b><span class="float-right"></span></div>`
    }

}

let guardarGasto = () => {

    localStorage.setItem('listaGastos', JSON.stringify(arrayGastos));

    mostrarGastos();
}

let mostrarGastos = () => {

    listaGastosUI.innerHTML = '';
    arrayGastos = JSON.parse(localStorage.getItem('listaGastos'));


    if (arrayGastos === null) {
        arrayGastos = [];

    } else {

        arrayGastos.forEach(element => {
            listaGastosUI.innerHTML += `<div class="alert alert-danger" role="alert">
            <i class="material-icons float-left mr-2"></i>
            <b>${element.gasto}</b> - ${element.descripcion} - ${element.date} 
            <span class="float-right"><i class="material-icons">done</i><i class="material-icons">delete</i></span></div>`
        });
    }
}

let eliminar = (gasto) => {
    let indexArray;
    arrayGastos.forEach((elemento, index) => {

        if (elemento.gasto === gasto) {

            indexArray = index;
        }

    });

    arrayGastos.splice(indexArray, 1);
    guardarGasto();
}

function conversor() {
    const monedaUno = totalGastos.value

}
//FUNCION DEL CONVERSOR
function calculate() {
    const moneda_uno = monedaUno.value;
    const moneda_dos = monedaDos.value;
    fetch(`https://v6.exchangerate-api.com/v6/6e4e45bab6cbc2688c3819b0/latest/${moneda_uno}`)
        .then(res => res.json())
        .then(data => {
            const taza = data.conversion_rates[moneda_dos];

            cambio.innerText = `1 ${moneda_uno} = ${taza} ${moneda_dos}`;
            cantidadDos.value = (cantidadUno.value * taza).toFixed(2);

        });
}

//EVENTOS
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let gastoUI = document.getElementById('gastos').value;
    let descripcionUI = document.getElementById('descripcion').value;
    let date = dayjs().format('dddd, MMMM D') // '25/01/2019'


    crearItem(gastoUI, descripcionUI, date);
    guardarGasto();

    formularioUI.reset();

});

// //EVENTO DEL DOM PARA MOSTRAR LOS GASTOS
// //SE GENERA CADA VEZ QUE EL SITIO CARGA 
document.addEventListener('DOMContentLoaded', mostrarGastos)


listaGastosUI.addEventListener('click', (e) => {

    e.preventDefault();


    if (e.target.innerHTML === 'done' || e.target.innerHTML === 'delete') {

        let texto = e.path[2].childNodes[1].innerHTML;
        if (e.target.innerHTML === 'delete') {
            //accion de eliminar
            eliminar(texto)
        }

    }
});
//EVENTOS DEL CONVERSOR

monedaUno.addEventListener('change', calculate);
cantidadUno.addEventListener('input', calculate);
monedaDos.addEventListener('change', calculate);
cantidadUno.addEventListener('input', calculate);

calculate();