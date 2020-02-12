<template>    
    <div class="row alert alert-primary history" role="alert">  
       <b-taglist  attached class="col-md-2 col-lg-2">
                    <b-tag type="is-dark">Recent History</b-tag>
                    <b-tag v-if="searchedItems" type="is-success">{{searchedItems.length}}</b-tag>
        </b-taglist>   
       <b-button v-for="item in searchedItems" :key="item" class="col-md-1 col-lg-1" rounded @click="selectedHistory(`${item}`)">{{item}}</b-button>           
     </div>
    
</template>
<script>

export default {   
    methods:{        
       selectedHistory(value){
           this.$emit('searchRecentCity',value)
       } 
    },
    computed:{
       searchedItems(){
           return this.$store.getters.searchedHistory
       } 
    }
}
</script>
<style scoped>
 .history{
     margin-right: 0px;
     margin-left: 0px;
     height: 60px;
 }
</style>