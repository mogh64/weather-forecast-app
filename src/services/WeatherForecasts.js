import Vue from 'vue';
class WeatherForecastsService{
    constructor(){

    }
    getForecastDataByCity(cityName){
        return Vue.http.get(`weather/forcast?city=${cityName}`)
        .then(response => response.json());
    }
    getForecastDataByZipCode(zipCode){
        return  Vue.http.get(`weather/forcast?zipCode=${zipCode}`)
        .then(response => response.json());
    }
}
export default WeatherForecastsService;