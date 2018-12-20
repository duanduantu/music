/**
 * Created by Administrator on 2018/12/18 0018.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}

export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    songstatus: 1,
    begin: 0,
    order: 'listen',
    num: 100,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    singermid: singerId,
    g_tk: 1664029744
  })

  return jsonp(url, data, options)
}
