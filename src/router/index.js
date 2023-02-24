import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {hot} from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';
// import App from '../containers/app';
// import Docs from '../containers/docs';

// import lifeCycle from '../containers/lifeCycle';

import Nice from '../containers/nice/index.js';


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
    <Provider store={Store}>
      <div className="router-content">
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          <Router path="/" component={Nice}>
            {/* <Route exact path="/lifeCycle" component={lifeCycle}></Route> */}
          </Router>
          {/* <Router path="/" component={App} >
            <Router exact path="/docs" component={Docs} />
          </Router> */}
        </Switch>
      </div>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
