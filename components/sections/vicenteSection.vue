<template>
  <div class="relative py-8">
    <div class="flex flex-wrap mx-auto">
      <div class="w-1/2 flex-col-center">
        <div
          class="text-4xl font-medium"
        >Recupera energia y liberate del estres juntando el poder de los masajes con la aromaterapia.</div>
        <div class="text-2xl font-medium pt-4">Una experiencia que desperá tus sentidos.</div>
        <Boton bgcolor="bg-darkAccent hover:bg-teal-500" text="Descube como" />
      </div>
      <div class="w-1/2">
        <ImgWrapper :src="vicenLogo" class="w-4/5 mx-auto" />
      </div>
    </div>
  </div>
</template>

<script>
import ImgWrapper from "~/components/ImgWrapper.vue";
import Boton from "~/components/Boton.vue";

export default {
  name: "vicenteSection",
  data() {
    return {
      vicenLogo: require("~/assets/img/vicenteLogoQuiro.png")
    };
  },
  components: {
    ImgWrapper,
    Boton
  }
};
</script>