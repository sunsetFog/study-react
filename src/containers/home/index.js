
import React, {Component} from 'react';
// 加载样式
import './index.less';
// 引入图片
import logoimg from '../../assets/nice/logo.png';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '../../redux/reduces/nice.js';

// 引入要大写，这是由 JSX 解析规则决定的
import MenuDesigns from '~/components/menuDesign';

import { routes } from '~/router/routes';

import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';
// import { browserHistory } from 'react-router';// 这个路由监听不了，好像是router3版本的
import { createBrowserHistory, createHashHistory } from 'history';

// connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch
@connect(
  state => ({nice: state.nice}),
  dispatch => bindActionCreators(niceActions, dispatch)
)

class Nice extends Component {
    state = {
        water: '水'
    }
    listenFunc = null
    componentWillMount() {
        // 这个不知道为啥用不了，<router history={history}也试过了
        // const history = createBrowserHistory();
        const history = this.props.history
        // console.log("--history-see-1-", history);
        this.listenFunc = history.listen((location, action) => {
            console.log("--方式1: 类路由监听--", location);
        })
    }

    componentWillUnmount() {
        if (this.listenFunc) {
            this.listenFunc();
        }
    }
    // 前提是用withRouter
    componentDidUpdate(prevProps, prevState) {
        console.log("--方式2: 类路由监听--", prevProps.location, "-2-", prevState, "-3-", this.props.location);
        if (this.props.location != prevProps.location) {
            console.log("--路由变了--");
        }
    }
    UNSAFE_componentWillMount() {

    }
    render() {

      return (
        <div className='home-box' style={{paddingTop: 0}}>
            <div className='home-left'>
              <div className='logo-name'>
                <img className='logo-img' src={logoimg}/>
                <span>娱乐管理后台</span>
              </div>
              <MenuDesigns></MenuDesigns>
            </div>

            <div className='home-right'>
              <div className="header">

              </div>
              {/*
                  study: 二级路由，方式1
                  等于vue路由视图：
                  Redirect表示以上匹配失败
                  默认重定向
                  404找不到  或 <Route component={NoMatch}/>

                  如果数据是通过动态请求获取的，请使用<BrowserRouter>，若数据是静态的，请使用<HashRouter>

              */}
              <main style={{ padding: '15px' }}>

                  <Switch>
                    {routes.map(item => true && <Route render={() => <item.component />} key={item.path} path={item.path} />)}

                    <Redirect to="/home/lifeCycle" />
                  </Switch>

              </main>
            </div>
        </div>
      );
    }
}

export default withRouter(Nice);
