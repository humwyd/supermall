import {request} from './request'

export function getHomeMUltidata () {
	return request({
		url:'/home/multidata'
	})
}

