<template>
    <section>
        <div class="temperature__value">{{ value | roundTemprature }}</div>
        <div class="temperature__right">
            <div class="temperature__scale">
                <a href="#" @click.prevent="toggleTemperature">&deg;{{ scaleSymbol }}</a>
            </div>            
        </div>
    </section>
</template>

<script>
export default {
    name: 'Temperature',

    props: {
        value: {
            type: Number            
        }
    },

    data: function() {
        return {
            scale: 'Celcius'
        }
    },

    computed: {
        scaleSymbol() {
            return this.scale.charAt(0);
        }        
    },

    methods: {       
        toggleTemperature() {
            (this.scale === 'Celcius')? this.scale = 'Fahrenheit' : this.scale = 'Celcius';
        }
    },
    filters:{
        roundTemprature: function (value) {
           if (!value) return ''
         
         return Math.round(value);
        }
    }
}
</script>

<style scoped>
section {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.temperature__value {
    font-size: 2em;
    color: rgba(255, 255, 255, 0.75);
}


.temperature__scale {
    padding-top: 5px;
    font-size: 2em;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.75);
}

</style>
