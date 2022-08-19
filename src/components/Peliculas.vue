 <template>
    <v-container class="body">
        <div class="text-center black--text display-2 font-weight-bold">Insertar Peliculas</div>
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
                    <span>
                        <carousel-3d>
                            <slide v-for="(a, i) in actores" :key="i" :index="i">
                                <img height="270px" :src="a.foto">
                            </slide>
                        </carousel-3d>
                    </span>
                </div>

                <br>
                <div>
                    <v-btn @click="insertarPeli()" color="primary">
                        Insertar Pelicula
                    </v-btn>
                </div>
                <div>
                    <v-btn @click="traerActores()" color="primary">
                        a
                    </v-btn>
                </div>
            </v-col>
            <v-col cols="2">

            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from "axios"
export default {
    name: 'PagePelis',

    data: () => ({
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
        personaje: ""
    }),
    methods: {
        insertarPeli() {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.post("http://localhost:4000/api/peliculas", {
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
                })
                .catch(error => {
                    console.log(error);
                })
        },
        traerActores() {
            axios.get(`http://localhost:4000/api/actores`)
                .then(response => {
                    console.log(response);
                    this.actores = response.data.actor
                    console.log(this.actores);
                })
                .catch(error => {
                    console.log(error);
                })
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

 