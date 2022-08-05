<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <img :src="peliculas.imagen">
            </v-col>
            <v-col cols="8">
                <div class="text--secondary">
                    <h1>{{ peliculas.titulo }}</h1>
                    <p></p>
                </div>
                <v-row>
                    <v-rating :value="peliculas.calificacion" color="amber" dense half-increments readonly size="14">
                    </v-rating>
                    <div class="grey--text ms-4 text--secondary">
                        {{ peliculas.calificacion }} % | {{ peliculas.fecha.slice(0,10) }} <h3>{{ peliculas.genero }}</h3>
                    </div>
                </v-row>
                <p></p>
                <v-row>
                    <div>
                        {{ peliculas.descripcion }}
                    </div>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
                <carousel-3d>
                    <slide v-for="(a, i) in actores" :key="i" :index="i" >
                     <img height="270px"
                            :src="a.idactor.foto"
                            @click="listar(a)" 
                            > 
                    </slide>
                </carousel-3d>
        </v-row>
        
    <v-row>

    </v-row>

    </v-container>
</template>

<script>

export default {
    name: "InicioDetalles",
    data() {
        return {
            peliculas: {},
            actores: [],

        }
    }, 
    methods: {
        listar(p) {
            console.log(p);
            this.peliculas = this.$store.state.peliculas
            this.actores = this.peliculas.reparto
        },
    },
    created() {
        this.listar()
    },
    

}
</script>

