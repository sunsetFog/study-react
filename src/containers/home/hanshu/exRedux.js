
import React, {useState,useEffect,useRef,useContext} from 'react';
// import { connect, useSelector } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types';
import { HashRouter as Router, Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';


function ExRedux(props) {
    // const { count } = useSelector(state => state.counter)
    return (
        <div>
            ++++++++++++++++++++++++hook2++++++++++++++++++++++++
            {/* { count } */}
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

// function mapStateToProps(params) {
//     console.log("-hook2-mapStateToProps-", params);
//     return {
//         state: params.counter
//     }
// }

// export default connect(mapStateToProps)(withRouter(ExRedux));
export default withRouter(ExRedux);