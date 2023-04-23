import LifeCycle from '~/containers/home/lifeCycle';
import attrBind from '~/containers/home/attrBind';
import Father from '~/containers/home/fatherAndSon/father';
import Jump from '~/containers/home/exJump';
import ExAxios from '~/containers/home/exAxios';
import ExVuex from '~/containers/home/exVuex';
import ExCache from '~/containers/home/exCache';
import Beautiful from '~/containers/home/beautiful';


import Cosplay from '~/containers/home/hanshu/cosplay';
import ExRedux from '~/containers/home/hanshu/exRedux';

export const first_arr = [
    { path: '/home/lifeCycle', name: '生命周期', component: LifeCycle },
    { path: '/home/attrBind', name: '属性绑定', component: attrBind },
    { path: '/home/father', name: '父子组件', component: Father },
    { path: '/home/jump/:id', name: '跳转', component: Jump },
    { path: '/home/exAxios', name: '自定义axios', component: ExAxios },
    { path: '/home/exVuex', name: '状态管理', component: ExVuex },
    { path: '/home/exCache', name: '缓存', component: ExCache },
    { path: '/home/beautiful', name: 'admin页面', component: Beautiful }
];

export const second_arr = [
    { path: '/home/cosplay', name: 'hook1', component: Cosplay },
    { path: '/home/exRedux', name: 'hook2', component: ExRedux },
];


// study: 二级路由，方式1
export const routes = [
    ...first_arr,
    ...second_arr
];
