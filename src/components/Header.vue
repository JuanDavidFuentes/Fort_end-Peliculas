
<template>
  <div class="mt-5">
    <v-app-bar app flex color="blue" dark>
      <v-app-bar-nav-icon @click="drawer = true" v-if="$store.state.token !== ''"></v-app-bar-nav-icon>

      <v-toolbar-title>ApiPeliculas con Jholman</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn @click="salir()" class="white blue--text" v-if="$store.state.token !== ''">
        salir
        <v-icon>mdi-door-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" absolute color="blue">
      <v-list>
        <v-list-item>
          <h1></h1>
        </v-list-item>

        <v-list-item class="d-flex justify-center" to="/perfil">
          <v-avatar color="white" size="62">
            <v-img :src="$store.state.datos.foto">
            </v-img>
          </v-avatar>
        </v-list-item>
        <v-list-item class="d-flex justify-center white--text mt-4 mb-4">
          <h3 align="center" justify="center">{{ $store.state.datos.nombre }}</h3>
        </v-list-item>

        <!-- //Pagina inicio -->

        <v-list-item to="/inicio">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="white--text">Home</v-list-item-title>
        </v-list-item>

        <!-- //grupo holders -->
        <v-list-item to="/holders" v-if="$store.state.datos.rol == 'ADMIN'">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>

          <v-list-item-title class="white--text">holders</v-list-item-title>
        </v-list-item>

        <v-list-item to="/favoritos">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-heart-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Lista de pelis favoritas</v-list-item-title>
        </v-list-item>

        <v-list-item to="/actores" v-if="$store.state.datos.rol == 'ADMIN'">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-sword</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Agregar actor</v-list-item-title>
        </v-list-item>

        <v-list-item to="/peliculas"  v-if="$store.state.datos.rol == 'ADMIN'">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-arrow-up-bold</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Agregar pelis</v-list-item-title>
        </v-list-item>

        <v-list-item to="/listarActores">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-sword</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Actores</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "InicioHeader",
  data() {
    return {
      drawer: false,
      group: null
    }
  },
  methods: {
    salir() {
      this.$router.replace("/")
      this.$store.commit("setToken", "")
    }

  }
}  
</script>


        <!-- <v-btn @click="insertarActor()">insertar Actor</v-btn>
,
        insertarActor(){
            this.$router.push("/actores")
        } -->