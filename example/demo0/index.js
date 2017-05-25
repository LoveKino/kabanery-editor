'use strict';

let {
    mount, n
} = require('kabanery');

let Editor = require('../..');

mount(n('div', {
    style: {
        width: 500,
        height: 300
    }
}, [
    Editor({
        content: 'abc',
        onchange: (v) => {
            console.log(v);
        }
    })
]), document.body);
