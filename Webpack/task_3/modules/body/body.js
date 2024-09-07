import $ from "jquery";
import _ from 'lodash';
import './body.css';

$('<p>Dashboard data for the students</p>').appendTo("body");
$('<button>Click here to get started</button>').appendTo("body");
$("<p id='count'></p>").appendTo("body");

$('button').on('click', _.debounce(updateCounter));

let count = 0;
function updateCounter() {
    count += 1;
    $('#count').html(`${count} clicks on the button`);
}