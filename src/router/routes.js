import LifeCycle from '~/containers/lifeCycle';
import attrBind from '~/containers/attrBind';
import Father from '~/containers/fatherAndSon/father';
import Jump from '~/containers/exJump';
import ExAxios from '~/containers/exAxios';
import ExVuex from '~/containers/exVuex';
import ExCache from '~/containers/exCache';

export const routes = [
    { path: '/lifeCycle', component: LifeCycle },
    { path: '/attrBind', component: attrBind },
    { path: '/father', component: Father },
    { path: '/jump', component: Jump },
    { path: '/exAxios', component: ExAxios },
    { path: '/exVuex', component: ExVuex },
    { path: '/exCache', component: ExCache }
];