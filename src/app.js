import {alertaH} from './messages';
import $ from 'jquery';
//importo el css en el app.js
import "./style.css";


document.getElementById('btn-alert')
    .addEventListener('click', alertaH);

    $('#btn-jq').click(()=>alert('Click con jquery'))