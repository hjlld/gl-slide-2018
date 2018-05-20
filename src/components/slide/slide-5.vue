<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-layout row wrap justify-center align-center align-content-center>
            <v-flex xs12 class="text-xs-center">
                <v-card height="100vh">
                  <v-card-media height="100%" :src="Zhuangbility">
                  </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import Zhuangbility from 'assets/img/zhuangbility.jpg'

export default {
    data: () => ({
        Zhuangbility: Zhuangbility,
    })
}
</script>
