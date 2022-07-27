import login from '../components/Login.vue';
import inicio from '../components/Inicio.vue';
import detalles from '../components/Detalles.vue';

export const routes = [
    {path: '/', component: login},
    {path: '/inicio', component: inicio},
    {path: '/detalles', component: detalles},
]