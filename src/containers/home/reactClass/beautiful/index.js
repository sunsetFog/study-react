/*
React官网
Fragment
https://legacy.reactjs.org/docs/fragments.html#gatsby-focus-wrapper
Component
https://legacy.reactjs.org/docs/web-components.html
*/
import React, { Component } from 'react';


/*
Redux 中文官网
https://cn.redux.js.org/api/compose
在API里

this.props对象里加入history属性???
*/
import { compose } from 'redux'
/*
状态管理
connect()函数将 React 组件连接到 Redux 存储
react-redux官网
https://react-redux.js.org/api/connect
*/
// import { connect } from 'react-redux';
// import * as niceActions from '~/redux/reduces/nice.js';
// import { bindActionCreators } from 'redux';

import { HashRouter as Router, Route, Switch, Redirect, Link, NavLink, withRouter } from 'react-router-dom';
// ui组件库
import { Button, Checkbox, Form, Input, DatePicker } from 'antd';
const { RangePicker } = DatePicker;

import { formatDuration, initUpdateDuration } from './utils'

// 子组件
import AddModal from './addModal'

import TableService from '~/library/tableService'

// 第一个是export default导出，第二个export导出
import hocTabPage, { initState } from '~/HigherOrder/hocTabPage'


// @connect(
//     state => ({ nice: state.nice }),
//     dispatch => bindActionCreators(niceActions, dispatch)
// )

class Beautiful extends TableService {

    state = {

    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('--查看继承属性和方法--', this)
    }
    
    // 提交表单且数据验证成功后回调事件
    onFinish(values) {
        console.log('Success:', values);
        values = {
            ...values,
            ...formatDuration(values.duration)
        }
        console.log('moment转YYYY-MM-DD HH:mm:ss格式', values)
        console.log('--查看继承属性和方法--', this, '---', initState)
    }
    // 提交表单且数据验证失败后回调事件
    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    }

    onChange(value, dateString) {
        console.log('Selected Time: ', value);// [M, M]
        console.log('Formatted Selected Time: ', dateString);// ['2023-04-11 23:12', '2023-04-18 20:09']
    }

    onOk(value) {
        console.log('onOk: ', value);// [M, M]
    }

    render() {

        return (
            <section>
                {/* 
                    initialValues 表单默认值
                */}
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ username: '哈喽', duration: initUpdateDuration() }}
                    onFinish={this.onFinish.bind(this)}
                    onFinishFailed={this.onFinishFailed.bind(this)}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Date"
                        name="duration"
                        rules={[{ required: true, message: 'Please input your duration!' }]}
                    >
                        <RangePicker
                            showTime={{
                                format: 'HH:mm',
                            }}
                            format="YYYY-MM-DD HH:mm"
                            onChange={this.onChange}
                            onOk={this.onOk}
                        />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                        &nbsp;&nbsp;&nbsp;
                        <AddModal>
                            <Button>
                                添加
                            </Button>
                        </AddModal>
                        
                    </Form.Item>
                </Form>
            </section>
        );
    }
}

// export default withRouter(Beautiful);

// 用了compose，那connect要写里面
export default compose(
    // connect((state: any) => {
    //     console.log('==状态管理==', state)
    //     return {
    //       user: state.user,  
    //     }
    // }),
    hocTabPage({tabList:[16]}), // 反向继承，防止于最后
)(Beautiful)