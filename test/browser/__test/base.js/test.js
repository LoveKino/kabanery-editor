'use strict';

let {
    mount, n
} = require('kabanery');

let {
    delay
} = require('jsenhance');

let assert = require('assert');

let Editor = require('../../../..');

const CONTENT = 'abc!!!!!mmmm!!';

mount(n('div id="test"', {
    style: {
        width: 500,
        height: 300
    }
}, [
    Editor({
        content: CONTENT
    })
]), document.body);

let error = null;
window.onerror = (err) => {
    error = err;
};

module.exports = delay(100).then(() => {
    assert(document.getElementById('test').textContent.indexOf(CONTENT) !== -1);
    if (error) {
        return Promise.reject(error);
    }
});
