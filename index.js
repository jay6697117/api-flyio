import * as user from './user'
import * as home from './home'
import * as wallet from './wallet'
import * as task from './task'
import Vue from 'vue'

//api返回结果，正确的状态
export const STATUS_OK = '000'

const api = {
	STATUS_OK: STATUS_OK,
	...user,
	...home,
	...wallet,
	...task
}

Vue.prototype.$api = api
export default api
