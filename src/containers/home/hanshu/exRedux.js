
import React, {useState,useEffect,useRef,useContext} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux'
import { add, fetchChannelList } from '~/store/modules/counterStore'

import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';


function ExRedux(props) {
    /*
        使用数据
        caught TypeError: (0 , _reactRedux.useSelector) is not a function
        升级react-redux版本到7.1.1
     */
    const { count } = useSelector(state => state.counter)

    // 修改数据
    const dispatch = useDispatch()
    const beanWay = () => {
        console.log("--beanWay--");
        // 1. 生成action对象
        const action = add(8)
        // 2. 提交action进行数据更新
        dispatch(action)
    }

    useEffect(() => {
        // 调用接口
        dispatch(fetchChannelList())
    }, [dispatch])



    return (
        <div>
            使用数据: { count }
            <br></br>
            <button onClick={beanWay}>修改store中的数据</button>
        </div>
    );
}

// 设置属性默认值
ExRedux.defaultProps = {
    colors: '绿色'
};
// 设置属性类型约束
ExRedux.propTypes = {
    colors: PropTypes.string
};

function mapStateToProps(params) {
    console.log("-hook2-mapStateToProps-", params);
    return {
        state: params.counter
    }
}

export default connect(mapStateToProps)(withRouter(ExRedux));
// export default withRouter(ExRedux);