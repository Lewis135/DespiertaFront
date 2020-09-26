<template>
  <div class="landingPage">
    <SeccionWrapper twMinH="min-h-3/4" twpy="py-12" class="text-xl">
      <h1>Mindful mondays: clases gratuitas online en Septiembre</h1>
      <div class="my-3 px-8">
        <p class="my-4">{{loremIpsum}}</p>
        <!-- <p class="my-4">{{loremIpsum}}</p> -->
      </div>

      <div class="px-3 my-3 text-2xl">
        <p class="font-medium">
          Horario:
          <span class="font-semibold">Lunes de 18:30 a 20:00</span>
        </p>
      </div>

      <div class="max-w-2xl p-8 mx-auto rounded border bg-gray-100 shadow text-center">
        <h2 class>Apúntate aquí a los Mindful Mondays</h2>
        <p
          class="text-lg"
        >Recibirás un email con el link de acceso a las sesiones, una meditación guiada de 10 minutos para practicar en casa y el primer capítulo de "Sonríe los lunes".</p>
        <!-- Form -->
        <div class="mt-4">
          <input
            class="w-full p-2 rounded border-b-2 border-lightAccent focus:outline-none shadow-md"
            type="text"
            placeholder="Nombre"
            v-model="nombre"
          />
        </div>
        <div class="mt-4">
          <input
            class="w-full p-2 rounded border-b-2 border-lightAccent focus:outline-none shadow-md"
            type="text"
            placeholder="Correo electronico"
            v-model="emailSubscriber"
          />
        </div>
        <div class="h-full text-sm text-left mt-4">
          <md-checkbox
            class
            v-model="checkPrivacidad"
          >Al apuntarme a las sesiones online acepto suscribirme al newsletter de Despierta, pudiendo darme de baja en cualquier momento.</md-checkbox>
        </div>
        <BotonLink class="bg-lightAccent py-2 mt-4"></BotonLink>
      </div>
    </SeccionWrapper>
  </div>
</template>             

<script>
export default {
  name: "landingPage",
  data() {
    return {
      loremIpsum:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      emailSubscriber: "",
      nombre: "",
      checkPrivacidad: false,
    };
  },
};
</script>

<style>
</style>