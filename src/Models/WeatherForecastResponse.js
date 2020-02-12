
class WeatherForcastResponse {
  constructor(data){
      this.city = data.city;
      this.country = data.country;
      this.perDayForecasts = data.avgForcasts;
  }
}
export default WeatherForcastResponse;