// import { getVisitHeaders } from '@/utils/request/requestTransfer';
// import { post, get } from '@/utils/request';

// // 获取抽奖记录
// export function lotteryRecord() {
//   return post('/dragonBoat2023/first/infoList', {
//     headers: getVisitHeaders(),
//   });
// }
// // 抽奖
// export function lotteryApply(params) {
//   return post('/dragonBoat2023/first/lottery', {
//     body: JSON.stringify(params),
//     transformResponse: (data) => data,
//   });
// }

// // 第二重领取
// export function secondApply() {
//   return post('/dragonBoat2023/second/apply', {
//     headers: getVisitHeaders(),
//   });
// }

// // 第三重活动 活动申请
// export function thirdApply() {
//   return post('/dragonBoat2023/third/apply', {
//     headers: getVisitHeaders(),
//   });
// }

// // 第四重详情
// export function fourthTable(params) {
//   return get('/dragonBoat2023/fourth/info', {
//     body: JSON.stringify(params),
//   });
// }



import customAxios from '~/api/http';
let domain = 'http://localhost:8062/sky';
export function getActiveInfoReq() {
  return customAxios.get(domain + '/v3/activities');
}
// 获取抽奖记录
export function lotteryRecord() {
  return customAxios.post(domain + '/dragonBoat2023/first/infoList');
}
// 抽奖
export function lotteryApply(params) {
  return customAxios.post(domain + '/dragonBoat2023/first/lottery', {
    body: JSON.stringify(params),
  });
}

// 第二重领取
export function secondApply() {
  return customAxios.post(domain + '/dragonBoat2023/second/apply');
}

// 第三重活动 活动申请
export function thirdApply() {
  return customAxios.post(domain + '/dragonBoat2023/third/apply');
}

// 第四重详情
export function fourthTable(params) {
  return customAxios.get(domain + '/dragonBoat2023/fourth/info', {
    body: JSON.stringify(params),
  });
}