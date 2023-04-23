import React from 'react'

/*
    高阶组件
    反向继承
*/

const WithTabPage = ({ tabList }) => (Component) => {// 第二个函数的return值 等于 第一个函数的return值

    // 类
    class WrapperComponent extends Component {

        constructor(props) {
            super(props)
        }

        componentDidMount() {
            console.log("--高阶组件--", tabList)
        }


        render() {
            return (
                <div>
                    新增插槽---视图
                    +----+{super.render && super.render()}+----+
                </div>
            )
        }
    }



    return WrapperComponent
}

export default WithTabPage

export const initState = {
    loading: false,
    world: '哈喽'
}
