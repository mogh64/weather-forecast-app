<template>
    <section>        
        <div class="wind-speed">
            <img src="../../assets/icons/wind.svg" alt="wind speed"><span class="wind__value">{{ windSpeed }}</span>m/s
        </div>
        <div class="humidity">        
            <img src="../../assets/icons/humidity.svg" alt="humidity"><span class="humidity__value">{{ humidity }}</span>&percnt;            
        </div>
    </section>
</template>

<script>

export default {
    name: 'StatisticValues',

    props: {       
        windSpeed: {
            type: Number            
        },
        humidity: {
            type: Number            
        }
    }
}
</script>

<style scoped>
section {
    width: 100%;
    padding-top: 12px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}


.wind-speed img {
    width: 24px;
    height: 48px;
    vertical-align: middle;
}

.humidity img {
    width: 24px;
    height: 48px;
    vertical-align: middle;
}
</style>
