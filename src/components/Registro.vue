  <template>
    <v-container-fluid class="a">
        <v-row class="b"></v-row>
        <v-row class="c">
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Resgistro</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form>
                                <v-text-field v-model="usuario" label="Usuario" type="text"></v-text-field>
                                <v-text-field v-model="nombre" label="Nombre" type="text"></v-text-field>
                                <v-text-field v-model="apellido" label="Apellido" type="text"></v-text-field>
                                <v-text-field v-model="email" label="Email" type="text"></v-text-field>
                                <v-text-field v-model="contrasena" label="Contraseña" type="password"></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="primary" @click=volver()>Volver</v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="primary" @click=registro()>registro</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-row>
        <v-row class="b"></v-row>

    </v-container-fluid>
</template>


<script>
import axios from "axios"
export default {
    name: 'PageRegistro',

    data: () => ({
        usuario: "",
        nombre: "",
        apellido: "",
        email: "",
        contrasena: "",
    }),
    methods: {
        registro() {
            axios.post("http://localhost:4000/api/usuario", {
                usuario:this.usuario,
                nombre:this.nombre,
                apellido:this.apellido,
                email: this.email,
                contrasena: this.contrasena
            })
                .then(response => {
                    console.log(response.data);
                    this.$router.push("/")
                })
                .catch(error => {
                    console.log(error);
                })
        },
        volver(){
            this.$router.push("/")
        }
    }
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