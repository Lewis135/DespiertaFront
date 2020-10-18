<template>
  <div id="summaryPostPanoramic" class="relative w-full h-full overflow-hidden">
    <!-- Imagen, WIP-->
    <div class="w-full cursor-pointer" @click="eventPostSelected()">
      <img :src="imgUrl" class="object-cover w-full h-40 shadow-md z-1 mx-auto" />
    </div>
    <!-- Texto -->
    <div class="relative pl-4">
      <h3 class="cursor-pointer" @click="eventPostSelected()">{{titulo}}</h3>
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
        "And the maravelous adventures of JoJo and Lagun, a socking and unexpected story.",
    },
    autor: { default: "Mayonesa, Protector del jardin" },
    url: String,
  },
  data() {
    return {
      listaTags: ["aromas", "masajes", "mindfulness"],
    };
  },
  computed: {
    imgUrl() {
      return this.url;
    },
  },
  methods: {
    eventPostSelected() {
      this.$emit("eventPostSelected");
    },
  },
  components: {
    ImgWrapper,
  },
};
</script>

<style scoped>
/* .postBackground {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 10%,
    rgba(255, 255, 255, 0) 50%
  );
} */

#summaryPostPanoramic:hover h3 {
  @apply text-lightAccent transition-duration-250;
}
</style>