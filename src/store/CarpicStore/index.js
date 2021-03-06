import axios from "axios"
export default {
    namespaced: true,
    state: {
        id: 0,
        nowAlbum: 'view', 
        nowIdx: 0,
        result: {}
    },
    mutations: {
        // 存储数据结果
        changeResult(state, payload){
            state.result = payload.result
        },
        // 改变当前车辆id
        changeId(state, payload){
            state.id = payload.id
        },
        // 改变当前显示的图集
        changeNowAlbum(state, payload){
            state.nowAlbum = payload.nowAlbum
        },
        // 改变当前图集的图片下标
        changeNowIdx(state, payload){
            state.nowIdx = payload.nowIdx
        }
    },
    actions: {
        async init({commit}, {id}){
            // 请求当前车辆的接口
            const { result } = await axios.get(`/car/${id}`).then(res=>res.data)
            console.log(result)
            // 存储请求成功的车辆数据
            commit('changeResult', {result})
            // 改变当前显示的车辆id
            commit('changeId', {id})
            // 切换图片为默认的view
            commit('changeNowAlbum', { nowAlbum: 'view'})
            // 当前图片编号归0
            commit('changeNowIdx', { nowIdx: '0'})
        }
    }
}