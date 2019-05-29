import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        weekInPut:'',
        dataInput:[],
        weeknow: 'Week 1',
        listAll: [
            { act: 'Run', skill: [{ skl: 'Hardwars' }, { skl: 'Softwars' }, { skl: 'Backend' }] },
            { act: 'Eat', skill: [{ skl: 'Network' }, { skl: 'Database' }] },
            { act: 'Sleep', skill: [{ skl: 'Frontend' }] },
            { act: 'Walk', skill: [{ skl: 'Frontend' }, { skl: 'Backend' }] },
            { act: 'Wacth TV', skill: [{ skl: 'Database' }, { skl: 'Backend' }] },
            { act: 'Swimming', skill: [{ skl: 'Network' }, { skl: 'Frontend' } ,{ skl: 'Backend' }] },
            { act: 'Play Game', skill: [{ skl: 'Hardwars' }, { skl: 'Softwars' }] }
        ],


    },
    mutations: {
        setWeek(state, week) {
            state.weeknow = week
        },
        setWeekInput(state,payload){
            state.weekInPut = payload
        },
        setDataInput(state, payload){
            state.dataInput = payload
            console.log("STORE dataInput : ",state.dataInput)
            console.log("X",state.listAll[index]);
            
            // for(let i=0;i<7; i++){
            //     if(state.listAll[index])
            // }
        }
    },
    getters: {
        weeknow: state => state.weeknow,
        listAll: state => state.listAll,
    },
})