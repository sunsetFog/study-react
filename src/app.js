// 相当于vue的main.js入口文件
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './router';

//globe css
import './style/index.styl';
import './style/less.less';
import './style/sass.sass';
import './style/scss.scss';


// study: http请求
import http from './api/http';
window.customAxios = http;

// 元素渲染到根 DOM 节点中
ReactDOM.render(<Root />, document.getElementById('app'));
