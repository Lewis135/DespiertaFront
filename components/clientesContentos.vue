<template>
  <div class="w-4/5 mx-auto px-10">
    <div class="p-8 text-center">
      <div
        class="w-32 h-32 rounded-full mx-auto border-8 border-lightAccent flex-col-center text-3xl font-bold"
      >
        <div>:D</div>
      </div>
      <h1 class="text-4xl font-semibold text-lightAccent">Marina</h1>
      <div class="text-2xl font-medium mb-2 text-darkAccent">Ojala haberles conocido antes</div>
      <div
        class="w-3/4 text-lg flex-grow mx-auto italic"
      >Desde que descubri el poder de combinar polvo de cuerno de unicornio con gelatina de Plumbus no he vuelto a necesitar ningun motor de fluzo para limpiar las cacerolas.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ClientesContentos",
  data() {
    return {
      pos: 0,
      listaClientes: [
        {
          nombre: "Marisa",
          frase: "Ojala haberles conocido antes",
          texto:
            "Desde que descubri el poder de combinar polvo de cuerno de unicornio con gelatina de Plumbus no he vuelto a necesitar ningun motor de fluzo para limpiar las cacerolas."
        },
        {
          nombre: "Rafael",
          frase: "Me gustan las pizzas",
          texto:
            "Desde que descubri el poder de las pizzas de lentejas y salsa barbacoa no he vuelto a tener problemas de cucarachas."
        },
        {
          nombre: "Cris",
          frase: "Ojala no haber nacido",
          texto:
            "Nunca pensais que la esperanza es la causa del dolor existencial?"
        }
      ]
    };
  },
  computed: {
    getCliente() {
      return listaClientes[pos];
    }
  }
};
</script>

<style>
</style>