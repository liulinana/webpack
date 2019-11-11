import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
    let element = document.createElement('div');

    let btn = document.createElement('button');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');
    btn.innerHTML = '点击这里,然后查看 console！';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element
}

document.body.appendChild(component());
