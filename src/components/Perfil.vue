<template >
    <v-container class="body">
        <v-row>
            <v-col cols="5"></v-col>
            <v-col cols="2" class="items-center">
                <v-avatar size="128">
                    <img :src="data.foto">
                </v-avatar>
            </v-col>
            <v-col cols="5"></v-col>
        </v-row>
        <v-row>
            <v-col cols="2"></v-col>
            <v-col cols="8" class="items-center">
                <div class="text-center display-1 black--text font-weight-bold">
                    Usuario: {{data.usuario}}
                </div>
                <br>
                <div class="text-center display-1 black--text font-weight-bold">
                    Nombres y apellidos: {{data.nombre}} {{data.apellido}}
                </div>
                <br>
                <div class="text-center display-1 black--text font-weight-bold">
                    Correo: {{data.email}}
                </div>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
    </v-container>
</template>


<script>
// import axios from 'axios'
export default {
    name: 'PagePerfil',

    data() {
        return {
            data: {}
        }
    },
    methods: {
        perfil() {
            this.data = this.$store.state.datos
            console.log(this.data);
        }
    },
    created() {
        this.perfil()
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
</style>