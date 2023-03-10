import LifeCycle from '~/containers/home/lifeCycle';
import attrBind from '~/containers/home/attrBind';
import Father from '~/containers/home/fatherAndSon/father';
import Jump from '~/containers/home/exJump';
import ExAxios from '~/containers/home/exAxios';
import ExVuex from '~/containers/home/exVuex';
import ExCache from '~/containers/home/exCache';
import Cosplay from '~/containers/home/hanshu/cosplay';
// study: 二级路由，方式1
export const routes = [
    { path: '/home/lifeCycle', component: LifeCycle },
    { path: '/home/attrBind', component: attrBind },
    { path: '/home/father', component: Father },
    { path: '/home/jump/:id', component: Jump },
    { path: '/home/exAxios', component: ExAxios },
    { path: '/home/exVuex', component: ExVuex },
    { path: '/home/exCache', component: ExCache },
    { path: '/home/cosplay', component: Cosplay }
];