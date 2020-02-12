<template>
    <div class="row">     
        
            <b-autocomplete
                class="searchBox"
                icon="search"
                icon-pack="fas"
                :data="addresses"
                placeholder="Search by City or ZipCode"                
                :loading="isFetching"
                @typing="getAsyncCities"
                @keyup.enter.native="onPressEnter($event)"
                @select="option =>  onSelected(option)">               
            </b-autocomplete>
    </div>
    
</template>
<script>

import CityListService from '../services/CityListService'
import _ from 'underscore'
import debounce from 'lodash/debounce'

export default {    
    data() {
    return {
      cityListService: new CityListService ,
      isFetching: false,
      addresses: [],
      addressSearch: '',
      selectedAddress: null      
    }
  },
  methods: {   
        getAsyncCities: debounce(function (query) {
               this.cityListService.getCityList(query).then(data =>{
                 this.addresses = data.map((city)=>{
                     return city.city+',  '+city.admin;
                 });
            });
            }, 500),         
    onSelected(city){              
        this.$emit('onSelectedPlace',city);
    },
    onPressEnter(event){
        this.$emit('onSelectedPlace',event.target.value);
    }
  },
  watch: {
    addressSearch: _.debounce(function(addr) { this.getAddresses(addr) }, 500)
  }
}
</script>
<style scoped>
.searchBox{
width: 97%;
 margin-top: 1em;   
 margin-bottom:2em;


}
</style>
