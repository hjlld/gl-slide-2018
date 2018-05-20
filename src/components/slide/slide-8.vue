<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-layout row wrap justify-center align-center align-content-center>
            <v-flex xs12 class="text-xs-center">
                <v-card height="100vh">
                  <v-card-media height="100%" :src="VectorGraphic">
                  </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import VectorGraphic from 'assets/img/vector-graphic.jpg'

export default {
    data: () => ({
        VectorGraphic: VectorGraphic,
    })
}
</script>
