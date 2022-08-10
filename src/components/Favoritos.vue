<template >
    <v-container class="body">
        <v-row style="margin:30px">
            <v-col cols="3" v-for="(p, i) in peliculas" :key="i">
                <template>
                    <v-card class="mx-auto" max-width="500">
                        <v-img class="white--text align-end" height="500px" :src="p.imagen">
                        </v-img>
                        <v-card-subtitle class="pb-2">
                            <div class="text-center">
                                <h1>
                                    {{ p.titulo }}
                                </h1>
                            </div>
                        </v-card-subtitle>
                        <v-card-text>
                            <h3>
                                {{ p.descripcion }}
                            </h3>
                            <br>
                            <v-row align="center" class="mx-0">
                                <v-rating :value="p.calificacion" color="amber" dense half-increments readonly
                                    size="14">
                                </v-rating>

                                <div class="grey--text ms-4">
                                    <h2>
                                        {{ p.calificacion }}
                                    </h2>
                                </div>
                            </v-row>
                        </v-card-text>
                        <v-card-actions>
                            <v-row>
                                <v-col cols="4"></v-col>
                                <v-col cols="4">
                                    <v-btn color="primary" @click="detalles(p)">
                                        Detalles
                                    </v-btn>
                                </v-col>
                                <v-col cols="4"></v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </template>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="6">
            </v-col>
            <v-col cols="6">
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PageInicio',

    data() {
        return {
            peliculas: []
        }
    },
    methods: {
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
        detalles(p){
            this.$store.dispatch("setPelicula", p);
            this.$router.push("/detalles")
        }
    },
    created() {
        this.listar()
    },
}
</script>

<style>
.body {
    margin: 50px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}
</style>