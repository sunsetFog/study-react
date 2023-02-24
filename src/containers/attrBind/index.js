import React, {Component} from 'react';
// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '../../redux/reduces/nice.js';

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

// 引入图片
import logoimg from '../../assets/nice/logo.png';

import { Button, theme, Modal } from 'antd'


@connect(
    state => ({nice: state.nice}),
    dispatch => bindActionCreators(niceActions, dispatch)
)

class attrBind extends Component {
    state = {
    }
    componentWillMount() {
      
    }

    render() {

      // 退出登录
      const exit = () => {
          Modal.confirm({
              title: '是否退出登录？',
              onOk() {
                  console.log("退出登录成功！")
              },
          })
      }

      return (
        <div>
            ++++属性绑定++++
            <div className="radish">
              class类名
            </div>
            <div style={{width: '1000px', margin: '0 auto',paddingTop: 20, color: 'red'}}>
              style样式
            </div>
            图片
            <img style={{width: '40px', height: '40px'}} src={logoimg}/>
            <br></br>
            <Button type="primary" onClick={exit}>返回登录</Button>
        </div>
      );
    }
}

export default withRouter(attrBind);