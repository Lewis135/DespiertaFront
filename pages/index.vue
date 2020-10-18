<template class="py-8">
  <!-- Body -->
  <div class="relative w-full overflow-x-hidden">
    <!-- Seccion de presentacion de la tienda-->
    <WavesTopDivider class="text-lightAccent" :height="'h-16'" />
    <WavesBotDivider class="text-lightAccent" :height="'h-20'" /> 
    <!-- Tati -->
    <div class="flex justify-center">
      <TatiSection class="max-w-screen-xl mx-32"      
        :text="tatiHome.text"
        :subText="tatiHome.subText"
        :buttonText="tatiHome.buttonText"
      />
    </div>

    <WavesTopDivider
      class="text-darkAccent transition-duration-250 w-5/2"
      :height="'h-16'"
    />
    <WavesBotDivider
      class="text-darkAccent transition-duration-250"
      :height="'h-20'"
    />

    <!-- Vicente -->
    <div class="flex justify-center">
      <VicenteSection class="max-w-screen-xl mx-32"
        :text="vicenHome.text"
        :subText="vicenHome.subText"
        :buttonText="vicenHome.buttonText"
      />
      
    </div>

    <div class="text-primary hover:text-pink-400 transition-duration-5000 w-full hover:w-5/2">
      <WavesTopDivider :height="'h-16'" />
      <WavesBotDivider class="w-5/2" :height="'h-20'" />
    </div>
    <!-- <WavesTopDivider class="text-primary" :height="'h-16'" />
    <WavesBotDivider class="text-primary" :height="'h-20'" /> -->
    <!-- <WavesTopDivider class="text-primary w-5/2" :height="'h-16'" /> -->

    <!-- Posts -->
    <div class="flex justify-center">
      <!-- <PostsPrincipales class="max-w-screen-xl mx-32" /> -->
    </div>

    <!-- <div class="text-primary hover:text-pink-200 transition-duration-5000 w-full hover:w-5/2">
      <WavesTopDivider :height="'h-16'" />
      <WavesBotDivider class="w-5/2" :height="'h-20'" />
    </div> -->
    <!-- Seccion de clientes -->
    <!-- <div class="flex-col-center">
      <clientesContentos />
    </div>-->
  </div>
</template>

<script>
import TatiSection from "~/components/sections/tatiSection.vue";
import VicenteSection from "~/components/sections/vicenteSection.vue";
import PostsPrincipales from "~/components/blog/postsPrincipales.vue";
import ClientesContentos from "~/components/clientesContentos.vue";

import ImgWrapper from "~/components/ImgWrapper.vue";

import {mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      // story: { content: {} },
    };
  },

  computed: {
    ...mapGetters({
      vicenHome: 'pages/getVicenHome',
      tatiHome:  'pages/getTatiHome',
    }),
    bgPerroSol() {
      let bgstyle = "background-image: url(" + this.perrosol + ");";
      bgstyle += "filter: grayscale(75%);";
      return bgstyle;
    },
  },
  async fetch({store, params}){
    store.dispatch('pages/retrieveVicenHomeData');
    store.dispatch('pages/retrieveTatiHomeData');
    store.dispatch("posts/retrieveListPosts");
  },
  methods:{
  },
  components: {
    TatiSection,
    VicenteSection,
    PostsPrincipales,
    ClientesContentos,
    ImgWrapper,
  },
};
</script>