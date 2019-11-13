import _ from 'lodash';
import printMe from './print.js';
import './style.less';
// import './aa/aa.css'
function component() {
    let element = document.createElement('div');

    let btn = document.createElement('button');
         element.classList.add('hello');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = '点击这里,后查看 console！';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element
}

document.body.appendChild(component());
