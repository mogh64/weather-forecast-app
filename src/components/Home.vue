<template>
 <div >
  <CitySearch class="align" @onSelectedPlace="getForcasts($event)"></CitySearch>
  <SearchHistory @searchRecentCity="getForcasts($event)"></SearchHistory>
  <div class="row align" >
  <div class="col-md-2 col-lg-2 card" 
    v-for="forecast in this.forecasts.perDayForecasts" :key="forecast.date">
    <WeatherCard  :dayForcast="forecast" class="app--day"  ></WeatherCard>
  </div>  
  </div>  
  <div class="row align cityName">     
      <b-message v-if="this.forecasts" type="is-info">
            {{this.forecasts.city}},{{this.forecasts.country}}
      </b-message>
  </div>     
 </div> 
</template>
<script>


import WeatherCard from './weather/WeatherCard'
import  CitySearch from './CitySearch'
import SearchHistory from './SearchHistory'
import WeatherForecastsService from '../services/WeatherForecasts'
import WeatherForcastResponse from '../Models/WeatherForecastResponse'

export default {
    data () {
        return{
              cityList:[],                          
              show:false,
              forecasts:  WeatherForcastResponse,              
              weatherForecastService: new WeatherForecastsService             
        }
        
    },
    methods:{        
        getForcasts(query){
                if(query.length==0)
                   return;
                let currentCity = '';
                if(this.forecasts){
                    currentCity = this.forecasts.city;
                }
                if(this.isNumeric(query)){
                     this.weatherForecastService.getForecastDataByZipCode(query).then(data=>{
                     this.forecasts = new WeatherForcastResponse(data); 
                     if(currentCity.length>0){
                         this.$store.dispatch('addHistory', currentCity);
                       }
                       if(this.forecasts){
                           this.$store.dispatch('removeHistory', this.forecasts.city);
                         }                                         
                     })
                } else {
                        let cityName = query.split(',')[0];
                        this.weatherForecastService.getForecastDataByCity(cityName).then(data=>{
                        this.forecasts = new WeatherForcastResponse(data);
                        if(currentCity.length>0){
                            this.$store.dispatch('addHistory', currentCity);
                          }  
                        if(this.forecasts){
                           this.$store.dispatch('removeHistory', this.forecasts.city);
                        }     
                     })
                 }
        },
        isNumeric (n) {
           return !isNaN(parseFloat(n)) && isFinite(n);
       },   
       selectedHistory(value){
           alert(value);
       }    
    },
    components:{
        WeatherCard,
        CitySearch,
        SearchHistory
    },
    created(){
        this.getForcasts('berlin');
    }

}
</script>
<style scoped>
 .card{
     display: contents;
     padding-left:30px;    
     
 }
 .align{
     margin-right: -30px;
     margin-left: 0px
 }
 .cityName{
     margin-top: 20px;
     margin-bottom: 10px;
 }
 .history{
     margin-right: 0px;
     margin-left: 0px;
     height: 60px;
 }
</style>