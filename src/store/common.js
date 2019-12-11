export default {
    state: {
        userName:'',
        userCheck: false,
        delete: "",
        update: "",
        insert: ""
    },
    getters: {
    },
    mutations: {
        // 本地存储入用户名
        setuserItem(state, username) {
            localStorage.setItem("userCheck", username);
            state.userName = username;
        },
        // 获取用户名
        getuserItem(state) {
           return state.userName=localStorage.getItem("userCheck")
        },
        // 删除用户名
        removeuserItem(state) {
            localStorage.removeItem("userCheck");
            state.userName = '';
        }
    },
    actions: {
    }
}