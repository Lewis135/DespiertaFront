<template>
  <div class="relative w-full">
    <!-- <div class="border-b-2 border-darkAccent"> -->
    <div class="w-full h-full flex flex-wrap">
      <!-- Imagen, WIP-->
      <div class="w-20 h-full bg-red-500">
        <ImgWrapper :src="imgUrl" />
      </div>
      <!-- Texto -->
      <div class="relative min-w-32 md:w-3/4 w-16 h-full pl-2 truncate">
        <div class="font-semibold">{{titulo}}</div>
        <label class="text-gray-600">{{subtitulo}}</label>

        <!-- Autor -->
        <div class="text-sm mt-3">{{autor}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper";
import nuxtConfig from "~/nuxt.config";

export default {
  name: "SummaryPostMini",
  props: {
    titulo: { default: "Going crazy" },
    subtitulo: {
      default: "If you can sleep so hard and never go late, you must be a hero."
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