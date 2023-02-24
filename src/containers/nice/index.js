
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

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

// connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch
@connect(
  state => ({nice: state.nice}),
  dispatch => bindActionCreators(niceActions, dispatch)
)

class Nice extends Component {
    state = {
      
    }
    componentWillMount() {
      console.log("--00ok--", this.props);
      this.props.changeApple({ bbb: 'KI' });
      console.log("--11ok--", this.props);
    }
    render() {
    //   const {home: {movelogo}} = this.props;
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
                <Link to="/lifeCycle">哈哈</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/attrBind">酷酷酷</Link>
              </div>
              {/* 
                  等于vue路由视图：
                  Redirect表示以上匹配失败
                  默认重定向
                  404找不到  或 <Route component={NoMatch}/>
                  
                  如果数据是通过动态请求获取的，请使用<BrowserRouter>，若数据是静态的，请使用<HashRouter>
              
              */}
              <main style={{ padding: '15px' }}>
                {/* <Router> */}
                  <Switch>
                    {routes.map(item => true && <Route render={() => <item.component />} key={item.path} path={item.path} />)}
                    <Redirect from="/" exact to="/lifeCycle" />
                    <Redirect to="/lifeCycle" />
                  </Switch>
                {/* </Router> */}
              </main>
            </div>
        </div>
      );
    }
}

export default withRouter(Nice);
