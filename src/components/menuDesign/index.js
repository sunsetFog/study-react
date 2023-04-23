
import React, {Component} from 'react';

// 状态管理
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as niceActions from '../../redux/reduces/nice.js';

// antd 图标和导航菜单
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
// 跳转用
import {useNavigate, useLocation, useHistory} from 'react-router-dom';
import { browserHistory } from 'react-router'

import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

import { first_arr, second_arr } from '~/router/routes'


// connect的作用是将组件和models结合在一起。将models中的state绑定到组件的props中。并提供一些额外的功能，譬如dispatch
@connect(
  state => ({nice: state.nice}),
  dispatch => bindActionCreators(niceActions, dispatch)
)

class menuDesign extends Component {
    state = {
    }
    UNSAFE_componentWillMount() {
      
    }
    // 导航菜单方法
    getItem(label, key, icon, children, type) {
      return {
        key,
        icon,
        children,
        label,
        type,
      };
    }
    menuWay(value) {
      console.log("菜单=",value);
      // const toNavigate = useNavigate();
      // toNavigate(value.key);

      // browserHistory.push(value.key);

      // const history = useHistory();
      // history.push(value.key);

      
      // this.context.router.history.push(value.key);


      /*
          this.props.history.push报错push undefined
          跳转url变了，页面没显示
          解决：所有组件用withRouter          
       */
      this.props.history.push(value.key);
      // this.props.history.replace('/docs');

      // 获得路由钩子
      // const location = useLocation();
      // console.log("--获得路由钩子--", location);

    }

    render() {
    // console.log("--first_arr--", first_arr)
    let box1 = []
    for (let i = 0; i < first_arr.length; i++) {
      const item = first_arr[i];
      box1.push(this.getItem(item.name, item.path))
    }

    let box2 = []
    for (let i = 0; i < second_arr.length; i++) {
      const item = second_arr[i];
      box2.push(this.getItem(item.name, item.path))
    }
    // console.log("--box1--", box1)
      
      const items = [
        this.getItem('知识点', 'sub1', <AppstoreOutlined />, box1),
        this.getItem('函数组件', 'sub2', <AppstoreOutlined />, box2)
      ];

      return (
        <section>
        <Menu
          style={{
            width: 256,
          }}
          onClick={this.menuWay.bind(this)}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items}
        />
        </section>
      );
    }
}

export default withRouter(menuDesign);