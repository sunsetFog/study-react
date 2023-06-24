import LifeCycle from '~/containers/home/reactClass/lifeCycle';
import attrBind from '~/containers/home/reactClass/attrBind';
import Father from '~/containers/home/reactClass/fatherAndSon/father';
import Jump from '~/containers/home/reactClass/exJump';
import ExAxios from '~/containers/home/reactClass/exAxios';
import ExVuex from '~/containers/home/reactClass/exVuex';
import Beautiful from '~/containers/home/reactClass/beautiful';


import hook1 from '~/containers/home/hooks/hook1';
import ExRedux from '~/containers/home/hooks/exRedux';
import Instruct from '~/containers/home/hooks/instruct';
import exMobx from '~/containers/home/hooks/exMobx';

export const first_arr = [
    { path: '/home/reactClass/lifeCycle', name: '生命周期', component: LifeCycle },
    { path: '/home/reactClass/attrBind', name: '属性绑定', component: attrBind },
    { path: '/home/reactClass/father', name: '父子组件', component: Father },
    { path: '/home/reactClass/jump/:id', name: '跳转', component: Jump },
    { path: '/home/reactClass/exAxios', name: '自定义axios', component: ExAxios },
    { path: '/home/reactClass/exVuex', name: '状态管理', component: ExVuex },
    { path: '/home/reactClass/beautiful', name: 'admin页面', component: Beautiful }
];

export const second_arr = [
    { path: '/home/hooks/hook1', name: 'hook1', component: hook1 },
    { path: '/home/hooks/exRedux', name: '状态管理@reduxjs/toolkit', component: ExRedux },
    { path: '/home/hooks/instruct', name: '指令', component: Instruct },
    { path: '/home/hooks/exMobx', name: '状态管理mobx', component: exMobx },
];


// study: 二级路由，方式1
export const routes = [
    ...first_arr,
    ...second_arr
];



// 路由表
import Fairyland from '~/containers/fairyland/index';
import Docs from '~/containers/fairyland/docs/index';
export const bingo = [
    { path: '/fairyland', component: Fairyland, children: [
        { path: '/fairyland/docs', component: Docs },
        { path: '/', redirect: '/fairyland/docs' }
    ] }
]
