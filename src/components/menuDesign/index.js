
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
    //   const {home: {movelogo}} = this.props;

    
      
      const items = [
        this.getItem('知识点', 'sub4', <AppstoreOutlined />, [
          this.getItem('生命周期', '/home/lifeCycle'),
          this.getItem('属性绑定', '/home/attrBind'),
          this.getItem('父子组件', '/home/father'),
          this.getItem('跳转', '/home/jump/12'),
          this.getItem('自定义axios', '/home/exAxios'),
          this.getItem('状态管理', '/home/exVuex'),
          this.getItem('缓存', '/home/exCache'),
          this.getItem('函数组件', '/home/cosplay'),
        ])
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