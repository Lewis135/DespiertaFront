<template>
  <div id="construccion" class="flex flex-col justify-center h-screen">
    <div class="relative h-screen-1/2 w-3/4 mx-auto  bg-contain bg-no-repeat" :style="bgMassage" />
  </div>
</template>
<script>
import ImgWrapper from "~/components/ImgWrapper";

export default {
  data:()=> ({
    imgMassage: require("~/assets/img/pagina-en-construccion.png"),
  }),
  computed:{
    bgMassage() {
      let bgStyle = "background-image: url(" + this.imgMassage + ");";
      return bgStyle;
    },
  },
  components: {
    ImgWrapper,
  },
};
</script>

<style>
</style>
