
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
                              label="email"
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
         axios.get("http://localhost:4000/api/usuario?email=juanfuente1221123123@gmail.com&contrasena=123456")
         .then(response=>{
            console.log(response.data);
         })
         .catch(error=>{
            console.log(error);
         })
      }
    }
  }
</script>
