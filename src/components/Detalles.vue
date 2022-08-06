<template>
    <v-container-fluid class="body">
        <v-img class="fondo" v-bind:style='{ backgroundImage: `url("${peliculas.imagen}")` }'>
            <v-row class="d">

                <v-col cols="1">
                </v-col>
                <v-col cols="3">
                    <v-img class="align-end" height="500px" :src="peliculas.imagen"></v-img>
                </v-col>


                <v-col cols="8">
                    <div class="text--secondary">
                        <div class="white--text display-2 font-weight-bold">
                            {{ peliculas.titulo }}: {{ peliculas.subtitulo }} ({{ peliculas.fecha.slice(0, 4) }})
                        </div>
                        <div class="white--text ms-5 mt-1 font-weight-light">
                            {{ peliculas.fecha.slice(0, 10) }} • {{ peliculas.genero }} • {{ peliculas.duracion }}
                        </div>
                        <p></p>
                        <div class="white--text display-2 font-weight-Medium">
                            descripcion
                        </div>
                    </div>
                    <p></p>
                    <v-row class="d">
                        <div class="white--text title font-weight-light">
                            {{ peliculas.descripcion }}
                        </div>
                    </v-row>
                    <v-row class="d">
                        <v-rating :value="peliculas.calificacion" color="amber" dense half-increments readonly
                            size="25">
                        </v-rating>
                        <div class="white--text ms-2  title font-weight-light">
                            {{ peliculas.calificacion }} %
                        </div>
                    </v-row>
                    <v-row>
                        <v-btn class="mx-2" fab dark small color="blue" @click="favoritos()">
                            <v-icon dark>
                                mdi-heart
                            </v-icon>
                        </v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-img>
        <v-row>

            <carousel-3d>
                <slide v-for="(a, i) in actores" :key="i" :index="i">
                    <img height="270px" :src="a.idactor.foto" @click="listar(a)">
                </slide>
            </carousel-3d>
        </v-row>

        <v-row>

        </v-row>

    </v-container-fluid>
</template>

<script>
import axios from "axios"
export default {
    name: "InicioDetalles",
    data() {
        return {
            peliculas: {},
            datos:{},
            actores: [],
            idPeli:"",
            idUsu:""
        }
    },
    methods: {
        listar(p) {
            console.log(p);
            this.peliculas = this.$store.state.peliculas
            this.actores = this.peliculas.reparto
        },
        favoritos(){
            this.datos=this.$store.state.datos
            this.idPeli=this.peliculas._id
            this.idUsu=this.datos._id
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("http://localhost:4000/api/favoritos", {
            usuario:this.idUsu,
            pelicula:this.idPeli
         }, header)
            .then(response => {
               console.log(response.data);
            })
            .catch(error => {
               console.log(error);
            })
        }
    },

    created() {
        this.listar()
    },


}
</script>

<style>
.body {
    margin: 10px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 100vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}

.d {
    margin: 0;
}

.fondo {
    margin: 0;
    min-height: 50vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
}

.fondo::before {
    content: "";
    width: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #4c00fd 70%, #4c00fd00);
    opacity: 0.8;
    z-index: -1;
}
</style>

<!-- <div v-bind:style='{ backgroundImage: `url("${peliculas.imagen}")` }'></div> -->