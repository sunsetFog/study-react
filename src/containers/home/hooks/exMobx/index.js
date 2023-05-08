import React, { useState, useEffect, useRef, useContext } from 'react';

// 1、导入countStore
import { counterStore } from '~/mobxStore/noModularity/counter'
// 2、导入中间件链接mobx react 完成响应式变化
import { observer } from 'mobx-react-lite'

import { useStore } from '~/mobxStore/index'

function exMobx1 () {
    const { counterStore02 } = useStore() // 解构赋值
    console.log("--counterStore02--", counterStore02);

  return (
    <div>
        ----------- 非模块化封装 -----------
      <br/><br/>
      使用store数据：{ counterStore.count }
      <br/><br/>

      <button onClick={counterStore.addCount}>调用action方法，修改count值</button>


      <br/><br/>
      ----------- 计算属性 -----------
      <br/><br/>

      数组转字符串：{ counterStore.filterList.join('-') }
      <br/><br/>
      <button onClick={counterStore.addList}>调用action方法，修改数组</button>


      <br/><br/><br/><br/>
      ----------- 模块化封装 -----------
      <br/><br/>

      使用store数据：{ counterStore02.count }
      <br/><br/>

      <button onClick={counterStore02.addCount}>调用action方法，修改count值</button>

    </div>
  )
}

// 3、包裹App
export default observer(exMobx1)
