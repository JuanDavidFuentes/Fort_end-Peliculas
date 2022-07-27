<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <img src="">
            </v-col>
            <v-col cols="8">
                <div class="text--secondary">
                    <h1>Titulo</h1>
                    <p></p>
                </div>
                <v-row>
                <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>
                <div class="grey--text ms-4 text--secondary">
                    4.5 | Fecha  genero
                </div>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default {
    name: "InicioDetalles",
    data() {
        return {
            peliculas: {}
        }
    }, methods: {
        listar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.get("http://localhost:4000/api/peliculas", header)
                .then(response => {
                    this.peliculas = response.data.pelicula
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
}
</script>

