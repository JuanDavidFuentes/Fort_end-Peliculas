
  <template>
   <v-container-fluid class="a">
         <v-row class="b"></v-row>
         <v-row class="c">
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Inicio de sesion</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field v-model="email" label="Email" type="text"></v-text-field>
                           <v-text-field v-model="contrasena" label="Password" type="password"></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-text>
                        <v-row class="d">
                           <v-col cols="5">
                           <v-btn color="primary" @click=resgistro()>Registrate</v-btn>
                           </v-col>
                           <v-col cols="7">
                           <p class="black--text">
                              Si no estas reguistrado registrate e inicia sesión
                           </p>
                           </v-col>
                        </v-row>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click=login()>Iniciar sesión</v-btn>
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
   name: 'PageLogin',

   data: () => ({
      email: "",
      contrasena: "",
      err: "",
      contra: "",
   }),
   methods: {
      login() {
         axios.post("http://localhost:4000/api/usuario/login", {
            email: this.email,
            contrasena: this.contrasena
         })
            .then(response => {
               console.log(response.data);
               this.$store.dispatch("setToken", response.data.token);
               this.$store.dispatch("setDatos", response.data.usuario);
               this.$router.push("/inicio")
            })
            .catch(error => {
               // this.err = error.response.data.errors[0].msg
               console.log(error);
            })
      },
      resgistro(){
         this.$router.push("/registro")
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
}.d{
   margin: 0;
}
</style>

 