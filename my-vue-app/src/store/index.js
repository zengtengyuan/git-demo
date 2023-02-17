
import { createStore  } from "vuex";

export default createStore({
    state:{
        isCollapse:false
    },
    mutations:{
        changeIsCollapse(state,payload){
            state.isCollapse = !state.isCollapse
        }
    }
})