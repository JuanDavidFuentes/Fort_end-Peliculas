import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store =new Vuex.Store({
    state: {
        token:"",
        datos:{},
        peliculas:{},
        comentarios:{},
        actores:{},
        titulo:""
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
        },
        setActor(state, datos){
            state.actores = datos
        }
        // setComentario(state, datos){
        //     state.comentarios = datos
        // }
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
        },
        setActor(context,value){
            context.commit('setActor',value)
        }
        // setComentario(context,value){
        //     context.commit('setComentario',value)
        // }
    }
});