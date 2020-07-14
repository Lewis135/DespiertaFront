<template>
  <div class="relative min-h-screen-2/3 w-full bg-white flex-col-center py-8">
    <div class="flex-col-center">
      <div class="flex flex-wrap w-10/12 mx-auto">
        <div class="w-1/2">
          <ImgWrapper :src="tatiLogo" :bgImage="bgImage" class="w-4/5 mx-auto" />
        </div>
        <div class="w-1/2 flex-col-center">
          <div
            class="text-4xl font-medium"
          >Vive disfrutando de cada momento que pasas contigo mismo.</div>
          <div
            class="mx-auto p-5 text-center mt-10 bg-lightAccent hover:bg-yellow-600 rounded-2xl rounded-tr-none select-none cursor-pointer shadow-lg"
          >
            <span class="text-xl text-lightShade uppercase font-medium">Descubre el mindfulness</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper.vue";

export default {
  data() {
    return {
      tatiLogo: require("~/assets/img/tatiLogo.png"),
      bgImage: require("~/assets/img/inkTexture.png")
    };
  },
  components: {
    ImgWrapper
  }
};
</script>