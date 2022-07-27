<template>
  <v-app>
    <Header/>
    <br>
    <router-view/>
    <br>
    <Footer/>
  </v-app>
</template>


<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Header,
    Footer
},

  data: () => ({
    //
  }),
};
</script>
