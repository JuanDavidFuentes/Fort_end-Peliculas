<template >
    <v-container class="body">
        <div v-if="ocultar === 1">
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" class="items-center">
                    <center>
                        <v-avatar size="200">
                            <img :src="data.foto">
                        </v-avatar>
                    </center>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
            <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" class="items-center">
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Usuario:
                        </span>
                        <span class="black-text title ml-4  black--text font-weight-light">
                            {{ data.usuario }}
                        </span>
                    </div>
                    <br>
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Nombres y apellidos:
                        </span>
                        <span class="black-text title ml-4  black--text font-weight-light">
                            {{ data.nombre }} {{ data.apellido }}
                        </span>
                    </div>
                    <br>
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Correo:
                        </span>
                        <span class="black-text title ml-4  black--text font-weight-light">
                            {{ data.email }}
                        </span>
                    </div>
                    <br>
                    <div>
                        <v-btn @click="cambio()" color="primary">
                            Editar perfil
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        </div>




        <div v-if="ocultar === 0">
                <v-row>
                <v-col cols="2"></v-col>
                <v-col cols="8" class="items-center">
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Nuevo usuario:
                        </span>
                        <span>
                           <v-text-field v-model="usuario" label="Usuario" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Nuevos nombres:
                        </span>
                        <span>
                            <v-text-field v-model="nombres" label="Nombres" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1  black--text font-weight-bold">
                            Nuevos apellidos:
                        </span>
                        <span>
                            <v-text-field v-model="apellidos" label="apellidos" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Nuevo correo:
                        </span>
                        <span>
                            <v-text-field v-model="correo" label="correo" type="text"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <span class="text-center display-1 black--text font-weight-bold">
                            Nueva contraseña:
                        </span>
                        <span>
                            <v-text-field v-model="password" label="password" type="password"></v-text-field>
                        </span>
                    </div>
                    <div>
                        <v-btn @click="editar()" color="primary">
                            Editar perfil
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
        </div>
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    name: 'PagePerfil',

    data() {
        return {
            data: {},
            ocultar: 1,
            usuario:"",
            nombres:"",
            apellidos:"",
            correo:"",
            password:""
        }
    },
    methods: {
        perfil() {
            this.data = this.$store.state.datos
            console.log(this.data);
        },
        editar(){
            console.log(this.idusu);
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.put(`http://localhost:4000/api/usuario/editar/${this.data._id}`, {
                usuario:this.usuario,
                nombre:this.nombres,
                apellido:this.apellidos,
                email: this.correo,
                contrasena: this.password
            },header)
                .then(response => {
                    console.log(response.data);
                    this.$router.push("/")
                })
                .catch(error => {
                    console.log(error);
                })
        },
        cambio(){
            this.ocultar=0
        }
    },
    created() {
        this.perfil()
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