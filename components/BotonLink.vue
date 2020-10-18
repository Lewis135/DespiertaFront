<template >
  <div
    class="w-full mx-auto px-5 rounded-2xl rounded-tr-none cursor-pointer shadow-lg flex-col-center"
    @click="goToLink"
  >
    <span class="text-center select-none text-lightShade font-medium">{{text}}</span>
  </div>
</template>
<script>
export default {
  name: "BotonLink",
  props: {
    text: { default: "Aceptar" },
    ruta: { default: "/#" },
    externalLink: {required: false, type: Boolean, default: false}
  },
  methods:{
    goToLink(){
      if(!this.externalLink){
        this.$router.push({path: "/construccion" })
      } else {
        console.log(this.ruta)
        window.open(this.ruta, '_blank')
      }

    }

  },
  computed: {},
};
</script>