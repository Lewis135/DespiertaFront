<template>
  <div class="relative py-8">
    <div class="flex flex-col lg:flex-row mx-auto">
      <div class="w-full lg:w-1/2 pb-10">
        <ImgWrapper :src="tatiLogo" :bgImage="bgImage" class="w-3/4 mx-auto" />
      </div>
      <div class="w-full lg:w-1/2 flex-col-center">
        <div class="text-4xl font-medium">{{text}}</div>
        <BotonLink
          class="mt-10 py-5 text-xl uppercase bg-lightAccent hover:bg-pink-400 transition-duration-250"
          :text="buttonText"
          ruta="/mindfulness"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper.vue";

export default {
  name: "TatiSection",  
  props:{
    text: {type: String, default: "text"},
    subText: {type: String, default: "subtext"},
    buttonText: {type: String, default: "buttonText"}
  },
  data() {
    return {
      tatiLogo: require("~/assets/img/tatiLogo.png"),
      bgImage: require("~/assets/img/inkTexture.png"),
    };
  },
  components: {
    ImgWrapper,
  },
};
</script>