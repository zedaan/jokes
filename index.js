// const jokes = require('./jokes');

import {jokes} from './jokes'
import $ from "jquery";
import fs from "fs";

jokes.getOne()
    .then(joke => {
        $('#joke').text(joke);
    });


const copy = fs.readFileSync(__dirname + '/copyright.txt', 'utf8');

$('#copy').text(copy);
