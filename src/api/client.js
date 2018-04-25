import axios from 'axios'
import humps from 'humps'
import { SUFFIX } from './constantSuffix'

const { DONE, SUCCESS, ERROR } = SUFFIX

const httpClient = axios.create({
  baseURL: 'https://api.wefit.vn',
  timeout: 15000,
  responseType: 'json'
})

httpClient.interceptors.request.use((request) => {
  return request
})

export const getSuccessActionName = type => type + SUCCESS

export const getDoneActionName = type => type + DONE

export const getErrorActionName = type => type + ERROR

const dispatchResult = (type, request, dispatch) => {
  request
    .then((response) => {
      response.data = humps.camelizeKeys(response.data)
      dispatch(getSuccessActionName(type), response)
    })
    .catch(error => dispatch('detectHttpCommonError', error))
    .finally(() => {
      dispatch(getDoneActionName(type))
    })
}

export const get = ({ type, dispatch, url, params = {}, token }) => {
  const headers = {
    'Accept-Language': 'vi',
    Accept: `application/json; version=v2`,
    Authorization: token ? `Bearer ${token}` : null
  }
  dispatchResult(type, httpClient.get(url, { params: humps.decamelizeKeys(params), headers }), dispatch)
}
export const post = ({ type, dispatch, url, params = {}, data, token }) => {
  const headers = {
    'Accept-Language': 'vi',
    Accept: `application/json; version=v2`,
    Authorization: token ? `Bearer ${token}` : ''
  }
  const paramsHumps = humps.decamelizeKeys(params)
  dispatchResult(type, httpClient.post(url, { data }, { headers }, { params: paramsHumps }), dispatch)
}
export const put = ({ type, dispatch, url, params = {}, data, token }) => {
  const paramsHumps = humps.decamelizeKeys(params)
  const headers = {
    'Accept-Language': 'vi',
    Accept: `application/json; version=v2`,
    Authorization: token ? `Bearer ${token}` : ''
  }
  dispatchResult(type, httpClient.put(url, { params: paramsHumps }, { headers }, { data }), dispatch)
}
// export function logErrors(error) {
//   if (error.response) {
//     // The request was made and the server responded with a status code
//     // that falls out of the range of 2xx
//     console.log(error.response.data)
//     console.log(error.response.status)
//     console.log(error.response.headers)
//   } else if (error.request) {
//     // The request was made but no response was received
//     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
//     // http.httpClientRequest in node.js
//     console.log(error.request)
//   } else {
//     // Something happened in setting up the request that triggered an Error
//     console.log('Error', error.message)
//   }
//   console.log(error.config)
// }
