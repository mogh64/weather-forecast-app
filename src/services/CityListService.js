import Vue from 'vue';
class CityListService{
constructor(){

}
getCityList(query){
    return Vue.http.get(`cityinfo?name=${query}`)
    .then(response => response.json());
}
}
export default CityListService;