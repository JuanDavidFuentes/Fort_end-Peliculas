<template>
    <v-container>
        <div>
            <template>
                <v-data-table :headers="headers" :items="peliculas" :items-per-page="5" class="elevation-1">
                </v-data-table>
            </template>
            <v-btn depressed color="primary" @click="listar()">
                Traer datos
            </v-btn>
        </div>
    </v-container>

</template>


<script>
import axios from 'axios'
export default {
    name: 'PageInicio',

    data() {
        return {
            token: this.$store.state.token,
            datos: this.$store.state.datos,
            peliculas: [],
            headers: [
                {
                    text: 'Titulo',
                    align: 'start',
                    sortable: false,
                    value: 'titulo',
                },
                { text: 'Subtitulo', value: 'subtitulo' },
                { text: 'Fecha', value: 'fecha' },
                { text: 'Descripcion', value: 'descripcion' },
                { text: 'Genero', value: 'genero' },
                { text: 'Duracion', value: 'duracion' },
                { text: 'Calificacion', value: 'calificacion' },
                { text: 'Actores', value: 'Actores' },
                // { text: 'Reparto', value: 'reparto[0].personaje' }, toca hacerlo aperte ya que puede traer mas de un actor
            ]
        }
    },
    methods: {
        listar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.get("http://localhost:4000/api/peliculas", header)
                .then(response => {
                    console.log(response);
                    this.peliculas = response.data.pelicula
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
}
</script>