'use strict';

/**
 * code case
 */

let {
    n, view
} = require('kabanery');

var ace = require('brace');
require('brace/mode/javascript');
require('brace/theme/monokai');

let count = 0;

/**
 * {
 *  id,
 *  content,
 *  onchange
 * }
 */
module.exports = view((data) => {
    data.id = data.id || `editor-code-${count++}`;
    let editor = null;

    // TODO opt
    setTimeout(() => {
        let curNode = document.getElementById(data.id);
        let parent = curNode.parentNode;
        parent.removeChild(curNode);
        let newChild = document.createElement('div');
        newChild.id = data.id;
        newChild.style = 'width:100%;height:100%';
        parent.appendChild(newChild);
        editor = ace.edit(data.id);
        editor.getSession().setMode('ace/mode/javascript');
        editor.setTheme('ace/theme/monokai');
        editor.setValue(data.content || '');
        editor.clearSelection();
    }, 0);

    return n('div', {
        style: {
            width: '100%',
            height: '100%'
        }
    }, [
        n(`div id=${data.id}`, {
            style: {
                width: '100%',
                height: '100%'
            },
            onkeyup: () => {
                data.content = editor.getValue();
                data.onchange && data.onchange(data.content);
            }
        })
    ]);
});
