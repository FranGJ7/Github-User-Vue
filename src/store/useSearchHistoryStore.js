import { defineStore } from "pinia";

export const useSearchHistoryStore = defineStore('searchHistory',{
    state: () =>{
        return {
            users:[]
        }
    },
    actions:{
        pushtoHistory(username){
            this.users.unshift(username)
        }
    }
})