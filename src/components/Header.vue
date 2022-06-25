<template>

    <v-toolbar app class="warning">
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>


      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <h3>menu</h3>
    </v-navigation-drawer>

    </v-toolbar>

</template>

<script>
export default {
    name:"InicioHeader",
    data: () => ({
      drawer: true,
    })

  }
  //https://i.ibb.co/fktCG83/asdasdasdasdsadsadsa.png
</script>

<style>
#b {
  height: 500px;
  width: 100vw;
  background-image: url("https://i.ibb.co/fktCG83/asdasdasdasdsadsadsa.png")
}

</style>