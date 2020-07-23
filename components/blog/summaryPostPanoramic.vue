<template>
  <div class="relative w-full h-full overflow-hidden">
    <!-- Imagen, WIP-->
    <div class="w-full h-32 bg-red-500">
      <ImgWrapper :src="imgUrl" />
    </div>
    <!-- Texto -->
    <div class="relative mt-2 pl-4">
      <div class="font-semibold text-xl">{{titulo}}</div>
      <!-- <div class="postBackground absolute h-full w-full pointer-events-none" /> -->
      <div class="text-gray-600 text-sm h-16 overflow-hidden">{{subtitulo}}</div>

      <!-- Autor -->
      <div class="text-sm mt-2">{{autor}}</div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper";
import nuxtConfig from "~/nuxt.config";

export default {
  name: "SummaryPostPanoramic",
  props: {
    titulo: { default: "The morning in the backyard" },
    subtitulo: {
      default:
        "And the maravelous adventures of JoJo and Lagun, a socking and unexpected story."
    },
    autor: { default: "Mayonesa, Protector del jardin" },
    url: String
  },
  data() {
    return {
      listaTags: ["aromas", "masajes", "mindfulness"]
    };
  },
  computed: {
    imgUrl() {
      return nuxtConfig.env.strapiBaseUri + this.url;
    }
  },
  components: {
    ImgWrapper
  }
};
</script>

<style scoped>
.postBackground {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0) 50%
  );
}
</style>