<template>
  <v-app>
    <Header/>
    <Login/>
    <Footer/>
  </v-app>
</template>


<script>
import Login from './components/Login.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',

  components: {
    Login,
    Header,
    Footer
},

  data: () => ({
    //
  }),
};
</script>
