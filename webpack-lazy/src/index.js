import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var button = document.createElement('button');
  var br = document.createElement('br');
  button.innerHTML = 'Click me and look at the console!';
  element.appendChild(br);
  element.appendChild(button);

  //点击按钮时动态加载print模块
  button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
     var print = module.default;
     print();
   });

  return element;
}

document.body.appendChild(component());