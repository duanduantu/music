/**
 * Created by Administrator on 2018/12/20 0020.
 */

import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  }
}

export default mutations
