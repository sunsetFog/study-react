import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
// 引入vuex
import Store from '../redux';
import DevTools from '../redux/DevTools';
import Fairyland from '../containers/fairyland/index';
import Docs from '../containers/fairyland/docs/index';

import App from '../containers/app';

// import lifeCycle from '../containers/lifeCycle';

import Nice from '~/containers/home/index.js';

import NotFound from '~/containers/404';


const Router = ({component: Component, children, ...rest}) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

/*
去掉url的"#"号:
1.BrowserRouter 替换 HashRouter   不好用
react-router-dom V6 中文文档教程总结
https://blog.csdn.net/xm1037782843/article/details/127454966
react-router-dom 中文文档
https://blog.csdn.net/sinat_17775997/article/details/120904801

exact表示是否精确匹配
*/
const Root = () => (
  <BrowserRouter>
    {/* 
        全局vuex
     */}
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          {/* 
              这相当于vue的app.vue
           */}
          <Router path="/" component={App} >

            {/* 
                注意用的是Route，Router嵌套时用
                exact是精确匹配
            */}
            {/* <Route exact path="/login" component={Login} /> */}


            {/* 
                study: 二级路由，方式1
            */}
            <Router path="/home" component={Nice}>
              
            </Router>

            {/* 
                study: 二级路由，方式2
             */}
            <Router path="/fairyland" component={Fairyland} >
              <Router exact path="/fairyland/docs" component={Docs} />
              <Redirect to="/fairyland/docs" />
            </Router>

            {/* 
                /去的页面
            */}
            <Redirect from="/" exact to="/home/lifeCycle" />

            {/* 
                404找不到页面
             */}
            <Route path="*" component={NotFound} />
          

            


          </Router>
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
