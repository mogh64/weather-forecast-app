<template>
    <section>    
        <div class="day">{{ day }}</div>
        <div class="date">{{ date | shortDate }}</div>                 
        <img v-if="icon" class="weather__icon" :src="this.iconPath" :alt="description">  
        
    </section>
</template>

<script>
import moment from 'moment'
export default {
    name: 'Weather',

    props: {        
        description: {
            type: String            
        },
        icon: {
            type: String            
        },
        day:{
            type: String
        },
        date:{
            type: String
        }
    },
    computed:{
        iconPath: function(){
            return require(`../../assets/icons/weather/${this.icon.toLowerCase()}.svg`)
        }
    },
    filters: {
       shortDate: function (value) {
           if (!value) return ''
         
         return moment(String(value)).format('MM/DD')
        }
}
    
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.weather__description {
    text-transform: lowercase;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
}

.weather__description:first-letter {
    text-transform: uppercase;
}

.weather__icon {
    width: 12em;
    padding-bottom: 9em;
}
.day {
    text-transform: uppercase;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    font-weight: bold;
}
.date {
    text-align: center;    
    font-size: 60%
}
</style>
