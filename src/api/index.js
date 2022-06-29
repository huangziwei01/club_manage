import request from './request'

export const reqGetAcitivityList = (account_id) => request({url:`account_id=${account_id}&page=1&limit=3&ordering=-created_time`,method:'GET'})