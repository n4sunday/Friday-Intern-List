import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store=new Vuex.Store({
    state:{
        weeknow:'Week 1',
    },
    mutations:{
        setWeek(state,week){
            state.weeknow=week
        }
    },
    getters:{
        weeknow:state=>state.weeknow,
    }

})