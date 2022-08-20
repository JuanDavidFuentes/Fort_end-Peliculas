<template>
    <v-container class="body">
        <v-row>
            <v-col cols="2">a</v-col>
            <v-col cols="8">
                <p v-if="aparecer === 1">Insertar Actor</p>
                <v-form v-if="aparecer === 1">
                    <div>
                        <span class="text-center display-1 black--text font-weight-Normal">
                            Nombre:
                        </span>
                        <span>
                            <v-text-field v-model="nombre" label="Nombre" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-Normal">
                            Observacion:
                        </span>
                        <span>
                            <v-text-field v-model="descripcion" label="Descripcion" type="text"></v-text-field>
                        </span>
                    </div>
                </v-form>
                <div v-if="aparecer === 0">
                    <div>Foto:</div>
                    <br>
                    <div>
                        <input type="file" @change="subir">
                    </div>
                    <br>
                    <v-row>
                        <v-col cols="6">
                            <v-btn color="red" @click="eliminar()">Cancelar</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn color="primary" @click="volver()">Guardar Actor</v-btn>
                        </v-col>
                    </v-row>
                </div>
                <div>
                    <v-btn v-if="aparecer === 1" color="primary" @click="insertar()">Continuar</v-btn>
                </div>
                <br>
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
            idactor: "",
            aparecer: 1,
            nombre: "",
            descripcion: ""
        }
    },
    methods: {
        insertar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("http://localhost:4000/api/actores", {
                nombre: this.nombre,
                observaciones: this.descripcion
            }, header)
                .then(response => {
                    console.log(response);
                    this.idactor = response.data.actor._id
                    console.log(this.idactor);
                    this.aparecer = 0
                })
                .catch(error => {
                    console.log(error);
                })
        },
        // listarActores(){
        //     axios.get("http://localhost:4000/api/actores",)
        //         .then(response => {
        //             this.actor=response.data.actor
        //             console.log(this.actor);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         })
        // },
        detalles(p) {
            this.$store.dispatch("setPelicula", p);
            this.$router.push("/detalles")
        },
        subir(e) {
            this.img = e.target.files[0]
            console.log(this.img);
           

        },
        volver() {
            console.log(this.img);
             if (this.img != undefined) {
                let fd = new FormData();
                fd.append("archivo", this.img);
                let header = { headers: { "x-token": this.$store.state.token } };
                console.log(fd);
                axios.put(`http://localhost:4000/api/actores/cargarCloud/${this.idactor}`,
                    fd, header)
                    .then(response => {
                        this.aparecer = 1
                        this.nombre = ""
                        this.descripcion = ""
                        console.log(response.data.url);
                    })
                    .catch(error => {
                        console.log(error);
                    })
            } else {
                this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Inserta una foto del actor!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        },
        eliminar() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.delete(`http://localhost:4000/api/actores/${this.idactor}`, header)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                })
            this.aparecer = 1
        }
    },
    // created() {
    //     this.listarActores()
    // },
}
</script>
<style>
.a {
    height: 100%;
    margin: 0;
    background-image: url("https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-Aesthetic.jpg")
}
</style>