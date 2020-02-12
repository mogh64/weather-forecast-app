import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
      searchedItems: [] 
    },
    
    getters: {
      searchedHistory: state => {
        return state.searchedItems 
      }
    },
    
    mutations: {       
          addItem(state,value){
              if(state.searchedItems.length>=8){
                state.searchedItems.splice(1,1);
              }
              if(state.searchedItems.includes(value)==false)
                  state.searchedItems.push(value);
          },
          removeItem(state,value){
              if(state.searchedItems.includes(value)){
                let index = state.searchedItems.findIndex(x=>x==value);
                state.searchedItems.splice(index,1);
              }
                 
          }

    },
    
    actions: {
        addHistory(context, value) {            
            context.commit('addItem',value)
          },
          removeHistory(context,value){
            context.commit('removeItem',value)
          }
    }
  });