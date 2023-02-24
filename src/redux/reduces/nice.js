// 定义变量
const set_userinfo = 'set_userinfo';

// state默认初始对象
const initialState = {
  water: '水'
};

// 默认导出   action = { type: 'set_userinfo' }
export default function reducer(state = initialState, action = {}) {
  console.log("顺序2=", action);
  switch (action.type) {
    case set_userinfo:
      console.log("Are you ok?");
      // 返回state 
      return {
        ...state,
        movelogo: false,
        hhh: 'OH NO!'
      };
    default:
      return state;
  }
}

// action
export function changeApple(data) {
  console.log("顺序1=", data);
  return {
    type: set_userinfo,
    ...data
  };
}
