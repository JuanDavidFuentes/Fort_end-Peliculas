
<template>
  <nav>
<v-toolbar color="blue">

  <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
  
  <v-toolbar-title class="text-uppercase white--text">
    <span class="font-weight-light">Todo</span>
    <span>Ninja</span>
  </v-toolbar-title>

  <v-spacer></v-spacer>

  <v-btn flat color="white">
    <span @click="salir()">Sing out</span>
    <!-- <v-app-bar-nav-icon right>exit_to_app</v-app-bar-nav-icon> -->
  </v-btn>

</v-toolbar>

  <v-navigation-drawer app v-model="drawer" absolute class="indigo">
  <v-container>
  <v-row>
    <v-col cols="4"></v-col>
    <v-col cols="4"><p>Foto</p></v-col>
    <v-col cols="4"><v-btn @click="drawer=!drawer" height="20">X</v-btn></v-col>
  </v-row>
  </v-container>
  </v-navigation-drawer>
  </nav>
</template>


<script>
export default {
    name:"InicioHeader",
    data(){
      return {
            drawer: false,
        }
    },
    methods: {
        salir() {
          this.$router.push("/")
        }
    }
  }  
</script>
