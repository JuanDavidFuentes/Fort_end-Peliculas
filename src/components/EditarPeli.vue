 <template>
    <v-container class="body">
        <div class="text-center black--text display-2 font-weight-bold">Editar Pelicula</div>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8" class="items-center">
                <br><br>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Titulo:
                    </span>
                    <span>
                        <v-text-field v-model="titulo" label="Titulo" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Subtitulo:
                    </span>
                    <span>
                        <v-text-field v-model="subtitulo" label="Subtitulo" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1  black--text font-weight-Normal">
                        Fecha:
                    </span>
                    <span>
                        <v-text-field v-model="fecha" label="Fecha" type="date"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Descripcion:
                    </span>
                    <span>
                        <v-text-field v-model="descripcion" label="Descripcion" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Genero:
                    </span>
                    <span>
                        <v-text-field v-model="genero" label="Genero" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Duracion:
                    </span>
                    <span>
                        <v-text-field v-model="duracion" label="Duracion" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Calificacion:
                    </span>
                    <span>
                        <v-text-field v-model="calificacion" label="Calificacion" type="text"></v-text-field>
                    </span>
                </div>
                <div>
                    <span class="text-center display-1 black--text font-weight-Normal">
                        Reparto:
                    </span>
                </div>
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
                <v-row>
                    <v-col cols="1"></v-col>
                    <v-col cols="10">
                        <v-row>
                            <v-col cols="3" v-for="(a, i) in actores" :key="i">
                                <v-card class="mx-auto" max-width="200">
                                    <v-img class="white--text align-end" height="150px" :src="a.foto">
                                    </v-img>
                                    <v-card-subtitle class="pb-2">
                                        <div class="black--text title">
                                            {{ a.nombre }}
                                        </div>
                                    </v-card-subtitle>
                                    <v-card-text>
                                        <v-row class="mx-0">
                                            <div class="grey--text ms-4">

                                            </div>
                                            <div>

                                            </div>
                                        </v-row>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn color="primary" dark @click="sacarId(a)">
                                            <v-icon dark>
                                                mdi-loupe
                                            </v-icon>
                                        </v-btn>
                                        <v-row justify="center" style="margin:0">

                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-col>
                        </v-row>
                        <br><br>
                    </v-col>
                    <v-col cols="1"></v-col>
                </v-row>
                <br>
                <div>
                    <v-btn @click="editarPeli()" color="primary">
                        Editar
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="2">

            </v-col>
        </v-row>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="text-h5">{{ idactor }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="personaje" label="Personaje*">
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click=cancelar()>
                        Close
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="insertarActor()">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>


<script>
import axios from "axios"
export default {
    name: 'PageEditarPelis',

    data: () => ({
        peliculaEditar: {},
        actores: [],
        titulo: "",
        subtitulo: "",
        fecha: "",
        descripcion: "",
        genero: "",
        duracion: "",
        calificacion: "",
        reparto: [],
        idactor: "",
        personaje: "",
        dialog: false,
        alerta: "",
        idpeli: ""
    }),
    methods: {
        editarPeli() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.put(`http://localhost:4000/api/peliculas/editar/${this.idpeli}`, {
                titulo: this.titulo,
                subtitulo: this.subtitulo,
                fecha: this.fecha,
                descripcion: this.descripcion,
                genero: this.genero,
                duracion: this.duracion,
                calificacion: this.calificacion,
                reparto: this.reparto
            }, header)
                .then(response => {
                    console.log(response.data);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: "Pelicula editada con exito",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.titulo = "" 
                    this.subtitulo = ""
                    this.fecha = ""
                    this.descripcion = ""
                    this.genero = ""
                    this.duracion = ""
                    this.calificacion = ""
                    this.reparto = []
                    this.idactor = ""
                    this.personaje = ""
                    this.alerta = ""
                    this.idpeli = ""
                })
                .catch(error => {
                    console.log(error);
                    this.$swal({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Inserta una poster de la Pelicula!',
                    })
                })
        },
        traerActores() {
            this.peliculaEditar = this.$store.state.peliculas
            console.log(this.peliculaEditar);
            this.titulo = this.peliculaEditar.titulo
            this.subtitulo = this.peliculaEditar.subtitulo
            this.descripcion = this.peliculaEditar.descripcion
            this.genero = this.peliculaEditar.genero
            this.duracion = this.peliculaEditar.duracion
            this.calificacion = this.peliculaEditar.calificacion
            this.idpeli = this.peliculaEditar._id
            axios.get(`http://localhost:4000/api/actores`)
                .then(response => {
                    console.log(response);
                    this.actores = response.data.actor
                    console.log(this.actores);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        sacarId(actor) {
            this.dialog = true
            this.idactor = actor._id
        },
        insertarActor() {
            let actores = { idactor: this.idactor, personaje: this.personaje }
            this.reparto.push(actores)
            this.idactor = ""
            this.personaje = ""
            this.dialog = false
        },
        cancelar() {
            this.idactor = ""
            this.personaje = ""
            this.dialog = false
        }

    },
    created() {
        this.traerActores()
    },
}
</script>

<style>
.a {
    height: 100%;
    margin: 0;
    background-image: url("https://www.todofondos.net/wp-content/uploads/1920x1080-Fondo-de-pantalla-Aesthetic.jpg")
}

.b {
    height: 15%;
    margin: 0;
}

.c {
    height: 70%;
    margin: 0;
}

.d {
    margin: 0;
}
</style>