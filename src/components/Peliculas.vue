<template>
    <v-container class="body">
        <v-row>
            <v-col cols="2">a</v-col>
            <v-col cols="8">
                <p v-if="aparecer === 1">Insertar Actor</p>
                <v-form v-if="aparecer === 1">
                    <v-text-field v-model="nombre" label="Nombre" type="text"></v-text-field>
                    <v-text-field v-model="descripcion" label="Descripcion" type="text"></v-text-field>
                </v-form>
                <div v-if="aparecer === 0">
                    <div>Foto:</div>
                    <div>
                        <input type="file" @change="subir">
                    </div>
                    <br>
                </div>
                <div>
                    <v-btn color="primary" @click="listar()">Guardar Actor</v-btn>
                </div>
                <v-expansion-panels>
                    <v-expansion-panel v-for="(item, i) in actores" :key="i">
                        <v-expansion-panel-header>
                            Item
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>
            <v-col cols="2">a</v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PagePeliculas',

    data() {
        return {
            peliculas: [],
            actor:[],
            aparecer: 1,
            nombre: "",
            descripcion: ""
        }
    },
    methods: {
        listar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("http://localhost:4000/api/actores", {
                nombre: this.nombre,
                observaciones: this.descripcion
            }, header)
                .then(response => {
                    console.log(response);
                    this.aparecer = 0
                })
                .catch(error => {
                    console.log(error);
                })
        },
        listarActores(){
            axios.get("http://localhost:4000/api/actores",)
                .then(response => {
                    this.actor=response.data.actor
                    console.log(this.actor);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        detalles(p) {
            this.$store.dispatch("setPelicula", p);
            this.$router.push("/detalles")
        },
        salir() {
            this.$router.push("/")
            this.$store.commit("setToken", "")
        },
        subir(e) {
            this.img = e.target.files[0]
            console.log(this.img);
            let fd = new FormData();
            fd.append("archivo", this.img);
            let header = { headers: { "x-token": this.$store.state.token } };
            console.log(fd);
            axios.put(`http://localhost:4000/api/actores/cargarCloud/${this.$store.state.datos._id}`,
                fd, header)
                .then(response => {
                    console.log(response.data.url);
                    this.$store.state.datos.foto = response.data.url
                })
                .catch(error => {
                    console.log(error);

                })
        },
    },
    created() {
        this.listarActores()
    },
}
</script>
<style>
.body2 {
    margin: 30px;
    font-family: sans-serif;
    display: grid;
    top: auto;
    min-height: 78vh;
    grid-template-rows: auto 1fr auto;
    align-items: center;
}
</style>