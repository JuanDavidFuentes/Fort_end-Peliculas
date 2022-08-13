<template>
    <v-container-fluid class="body">
        <div v-if="ocultar === 1">
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
                                Descripcion
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
                        <img height="270px" :src="a.idactor.foto" @click="actor(a)">
                    </slide>
                </carousel-3d>
            </v-row>

            <v-row>
                <v-row class="d">
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <div class="black--text text-center display-2 font-weight-bold">
                            Comentarios
                        </div>
                        <v-form>
                            <v-text-field v-model="comentario" label="Comentario" type="text"></v-text-field>
                            <v-btn color="primary" @click="Icomentario()">Comentar</v-btn>
                        </v-form>
                    </v-col>
                    <v-col cols="2"></v-col>
                </v-row>
            </v-row>
            <v-row class="d">
                <v-col cols="2"></v-col>
                <v-col cols="8">
                    <v-row class="d" v-for="(c, i) in comentarios" :key="i">
                        <div>
                            - {{ c.comentario }}
                        </div>
                    </v-row>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        </div>

        <div v-if="ocultar === 0">
            <v-row>
                <v-col cols="3">
                    <v-img height="70vh" :src="detalles.idactor.foto"></v-img>
                </v-col>
                <v-col cols="8">
                    <div class="text-center display-2 black--text font-weight-Normal">
                        Detalles del Actor {{ detalles.idactor.nombre }}
                    </div>
                    <br><br><br><br><br>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Nombre:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ detalles.idactor.nombre }}
                            </span>
                        </v-alert>
                    </div>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Observaciones:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ detalles.idactor.observaciones }}
                            </span>
                        </v-alert>
                    </div>
                    <div>
                        <v-alert color="blue" outlined>
                            <span class="text-center display-1 black--text font-weight-Normal">
                                Personaje el cual interpreta el actor:
                            </span>
                            <span class="black-text title ml-4  black--text font-weight-light">
                                {{ detalles.personaje }}
                            </span>
                        </v-alert>
                    </div>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8">
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
            <v-row>
                <v-col cols="4"></v-col>
                <v-col cols="4" class="text-center">
                    <v-btn color="primary" @click="volverr()">
                        volver
                    </v-btn>
                </v-col>
                <v-col cols="4"></v-col>
            </v-row>
        </div>




    </v-container-fluid>
</template>

<script>
import axios from "axios"
export default {
    name: "InicioDetalles",
    data() {
        return {
            peliculas: {},
            datos: {},
            actores: [],
            comentarios: [],
            detalles: [],
            idPeli: "",
            idUsu: "",
            comentario: "",
            ocultar: 1
        }
    },
    methods: {
        listar() {
            this.peliculas = this.$store.state.peliculas
            this.actores = this.peliculas.reparto
            console.log(this.actore);
            console.log(this.peliculas);
        },
        favoritos() {
            this.datos = this.$store.state.datos
            this.idPeli = this.peliculas._id
            this.idUsu = this.datos._id
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("http://localhost:4000/api/favoritos", {
                usuario: this.idUsu,
                pelicula: this.idPeli
            }, header)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        Icomentario() {
            this.datos = this.$store.state.datos
            this.idPeli = this.peliculas._id
            this.idUsu = this.datos._id
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("http://localhost:4000/api/comentarios", {
                usuario: this.idUsu,
                pelicula: this.idPeli,
                comentario: this.comentario
            }, header)
                .then(response => {
                    console.log(response.data);
                    this.traerComentatio()
                    this.comentario = ""
                })
                .catch(error => {
                    console.log(error);
                })
        },
        traerComentatio() {
            this.idPeli = this.peliculas._id
            axios.get(`http://localhost:4000/api/comentarios/listarCdeP/${this.idPeli}`)
                .then(response => {
                    this.comentarios = response.data.comen
                })
                .catch(error => {
                    console.log(error);
                })
        },
        actor(a) {
            this.ocultar = 0
            this.detalles = a
            console.log(this.detalles);
        },
        volverr() {
            this.ocultar = 1
        }
    },
    created() {
        this.listar()
        this.traerComentatio()
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