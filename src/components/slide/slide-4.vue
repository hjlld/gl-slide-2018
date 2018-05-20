<template>
    <v-container fluid fill-height class="ma-0 pa-0">
        <v-layout row wrap justify-center align-center align-content-center>
            <v-flex xs12 class="text-xs-center">
                <v-card height="100vh">
                  <v-card-media height="100%" :src="GameOver">
                  </v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
import GameOver from 'assets/img/game-over.png'

export default {
    data: () => ({
        GameOver: GameOver,
    })
}
</script>
