export default {
    namespaced: true,
    state: {
        column: ''  //当前所在栏目
    },
    mutations: {
        // 改变栏目的属性
        changeColumn(state, { column }){
            state.column = column
        }
    }
}