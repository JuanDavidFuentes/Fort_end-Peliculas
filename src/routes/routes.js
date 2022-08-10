import login from '../components/Login.vue';
import inicio from '../components/Inicio.vue';
import detalles from '../components/Detalles.vue';
import registro from '../components/Registro.vue';
import perfil from '../components/Perfil.vue';
import favoritos from '../components/Favoritos.vue'

export const routes = [
    {path: '/', component: login},
    {path: '/registro', component: registro},
    {path: '/inicio', component: inicio},
    {path: '/detalles', component: detalles},
    {path: '/perfil', component: perfil},
    {path: '/favoritos', component: favoritos},
]