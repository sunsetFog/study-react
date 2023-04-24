import { createSlice } from '@reduxjs/toolkit'

import customAxios from '~/api/http';

const counter = createSlice({
  // 模块名称独一无二
  name: 'counter',
  // 初始数据
  initialState: {
    count: 1,
    channelList: []
  },
  // 修改数据的同步方法
  reducers: {
    add (state, action) {
      state.count = action.payload
    },
    setChannelList (state, action) {
      state.channelList = action.payload
    }
  }
})

const { add, setChannelList } = counter.actions

// 接口异步处理
const url = 'http://geek.itheima.net/v1_0/channels'
// 封装一个函数 在函数中return一个新函数 在新函数中封装异步
// 得到数据之后通过dispatch函数 触发修改
const fetchChannelList = () => {
  return async (dispatch) => {
    const res = await customAxios.get(url)
    dispatch(setChannelList(res.data.data.channels))
  }
}




// 导出修改数据的函数
export { add, fetchChannelList }

// 导出reducer
const counterReducer = counter.reducer
export default counterReducer