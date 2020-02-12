<template>
    <main>
        <StatisticValues 
            :windSpeed="this.dayForcast.windSpeed"
            :humidity="this.dayForcast.humidity"
        ></StatisticValues>
        <Temprature
        :value="this.dayForcast.temprature"
        ></Temprature>
        <WeatherSummary 
            :date="this.dayForcast.date"
            :day="this.dayForcast.day"
            :description="this.dayForcast.summary.weather"
            :icon="this.dayForcast.summary.weather"
        ></WeatherSummary>                
    </main>
</template>
<script>
import StatisticValues from './StatisticValues'
import Temprature from './Temprature'
import WeatherSummary from './WeatherSummary'


export default {
    name: 'WeatherCard',
    components:{
        StatisticValues,
        Temprature,
        WeatherSummary
    },
    props:{
        dayForcast:Object
    }
}
</script>
<style  scoped>
main {
    width: 16%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.app--day {
    background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('../../assets/images/morning.jpg');
}
@media screen and (min-width: 250px) {
    main {
        height: 25em;
        border-radius: 2px;
        margin-left: 2px;
    }
}
</style>