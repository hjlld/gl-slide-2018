<template>
    <v-app>
        <v-navigation-drawer app v-model="drawer">
            <v-card flat>
                <v-card-text v-html="narration" class="pa-3">
                </v-card-text>
            </v-card>
        </v-navigation-drawer>
        <v-content>
            <v-fab-transition>
            <v-btn color="primary" class="ml-3" flat outline fab fixed top @click="drawer = !drawer">
                <v-icon>comment</v-icon>
            </v-btn>
            </v-fab-transition>
            <v-scale-transition>
              <component :is="slide"></component>
            </v-scale-transition>
        </v-content>
    </v-app>
</template>
<script>
import Narration from 'assets/etc/narration.json'

var slide = new Object
var req = require.context("components/slide", true, /\.vue$/)
req.keys().forEach(function(key){
    slide[key.split('.')[1].substring(1)] = req(key).default
});

export default {
    components: slide,
    data: () => ({
        slide: 'slide-1',
        drawer: true
    }),
    computed: {
        narration: function(){
            return Narration[this.slide]
        }
    },
    mounted: function(){
        let _this = this
        var hash = window.location.hash
        if(hash.match(/^#([0-9]+)$/)) this.slide = 'slide-' + hash.substring(1)
        window.addEventListener('keyup', function(e){
            if(e.keyCode == 37) _this.previous()
            if(e.keyCode == 39) _this.next()
        }, false)
    },
    methods: {
        previous(){
            this.slide = 'slide-' +  (parseInt(this.slide.substring(6)) - 1).toString()
        },
        next(){
            this.slide = 'slide-' +  (parseInt(this.slide.substring(6)) + 1).toString()  
        }
    }
}
</script>
<style>
html {
    overflow: hidden;
}
</style>
