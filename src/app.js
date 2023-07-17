// 相当于vue的main.js入口文件
import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import Root from './router';

//globe css
import './style/index.styl';
import './style/less.less';
import './style/sass.sass';
import './style/scss.scss';


// study: http请求
import http from '~/api/http';
window.customAxios = http;

// 跨组件通信Context    例如：父直接传孙子
const  DefineContext = createContext();
window.DefineContext = DefineContext;

// 元素渲染到根 DOM 节点中
ReactDOM.render(<Root />, document.getElementById('app'));
