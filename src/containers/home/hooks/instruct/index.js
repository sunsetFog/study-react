import React, { useState, useEffect, useRef, useContext } from "react";
// import { useHistory } from 'react-router'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
    HashRouter as Router,
    Route,
    Switch,
    Redirect,
    Link,
    withRouter,
    useHistory,
    useSearchParams
} from "react-router-dom";

function InstructUnit(props) {
    const [openBay, setOpenBay] = useState(false);
    const [listBay, setListBay] = useState([1, 5, 10]);

    console.log("--props--", props)
    // 报错：caught TypeError: (0 , _reactRouterDom.useSearchParams) is not a function
    // const [searchParams, setSearchParams] = useSearchParams()
    // console.log("--路由参数--", searchParams)

    const beanWay = () => {
        console.log("--beanWay--");
        setOpenBay(!openBay);
    }

    return (
        <section>
            ----------------- 类似v-if指令 -----------------
            <br/><br/>
            <button onClick={beanWay}>显示隐藏</button>
            <br/><br/>
            { openBay && <span>--哈喽--</span>}
            <br/><br/>
            ----------------- 类似v-for指令 -----------------
            <br/><br/>
            { listBay.map((item, index) => (
                <button key={index}>{item}</button>
            ))}
        </section>
    )
}

InstructUnit.defaultProps = {
    colors: "蓝色",
};

InstructUnit.propTypes = {
    colors: PropTypes.string,
};

function mapStateToProps(params) {
    console.log("-mapStateToProps-", params);
    return {
        state: params.example,
    };
}

export default connect(mapStateToProps)(withRouter(InstructUnit));
