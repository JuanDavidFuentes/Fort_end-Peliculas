
  <template>
   <v-app id="inspire">
      <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Login form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                           v-model="email"
                              label="Email"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                           v-model="contrasena"
                              label="Password"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click=login()>Login</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>
   </v-app>
</template>


<script>
import axios from "axios"
  export default {
    name: 'PageLogin',

    data: () => ({
      email:"",
      contrasena:""
    }),
    methods:{
      login(){
         axios.post("http://localhost:4000/api/usuario/login",{
            email:this.email,
            contrasena:this.contrasena
         })
         .then(response=>{
            console.log(response.data);
            this.$store.dispatch("setToken",response.data.token);
            this.$store.dispatch("setDatos",response.data.usuario);
            this.$router.push("/inicio")
         })
         .catch(error=>{
            console.log(error);
         })
      }
    }
  }
</script>
