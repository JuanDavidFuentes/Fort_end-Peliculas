<template>
   <div>
    <h1>{{token}}</h1>
    <h1>{{datos}}</h1>
    <br>
    <br>
    <br>
    <v-btn depressed color="primary" @click="listar()">
      Traer datos
    </v-btn>
   </div>
   

</template>


<script>
import axios from 'axios'
  export default {
    name: 'PageInicio',

    data(){
        return{
            token:this.$store.state.token,
            datos:this.$store.state.datos
        }
    },
    methods:{
        listar(){
            let header = {headers:{"x-token":this.$store.state.token}}
            axios.get("http://localhost:4000/api/peliculas", header)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
  }
</script>