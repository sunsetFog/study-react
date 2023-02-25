// 定义变量
const set_userinfo = 'set_userinfo';

// state默认初始对象
const initialState = {
  water: '水'
};

// 默认导出   action传参 = { type: 'set_userinfo' }
export default function reducer(state = initialState, action = {}) {
  console.log("顺序2=入参", action);
  // 深拷贝state
  let takeState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case set_userinfo:
      takeState.water = action.water;
      console.log("Are you ok?");
      // 返回state
      return takeState;
    default:
      return state;
  }
}

// action 可以异步，接口就是异步js
export function changeApple(data) {
  console.log("顺序1=入参", data);
  return {
    type: set_userinfo,
    ...data,
    // promise: axios.get('/api/getuser')
  };
}
