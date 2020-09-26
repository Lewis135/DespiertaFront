<template>
  <div id="summaryPostMini" class="relative w-full">
    <!-- <div class="border-b-2 border-darkAccent"> -->
    <div class="w-full h-full flex flex-wrap">
      <!-- Imagen, WIP-->
      <img
        :src="imgUrl"
        class="object-cover w-20 h-20 z-1 shadow-md cursor-pointer"
        @click="eventPostSelected()"
      />

      <!-- Texto -->
      <div class="relative min-w-28 md:w-3/5 w-16 h-full pl-2 truncate">
        <h4 class="cursor-pointer transition-duration-250" @click="eventPostSelected()">{{titulo}}</h4>
        <label class="text-gray-600">{{subtitulo}}</label>

        <!-- Autor -->
        <div class="mt-3 truncate">
          <label class="text-sm">{{autor}}</label>
        </div>
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
      default:
        "If you can sleep so hard and never go late, you must be a hero.",
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
      return nuxtConfig.env.strapiBaseUri + this.url;
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

#summaryPostMini:hover h4 {
  @apply text-lightAccent;
}
</style>