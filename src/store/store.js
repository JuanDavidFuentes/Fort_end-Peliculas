import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store =new Vuex.Store({
    state: {
        token:"",
        datos:{},
        peliculas:{}
    },
    mutations:{
        setToken(state,value){
            state.token = value
        },
        setDatos(state, datos){
            state.datos = datos
        },
        setPelicula(state, datos){
            state.peliculas = datos
        }
    },
    actions:{
        setToken(context,value){
            context.commit('setToken',value)
        },
        setDatos(context,value){
            context.commit('setDatos',value)
        },
        setPelicula(context,value){
            context.commit('setPelicula',value)
        }
    }
});