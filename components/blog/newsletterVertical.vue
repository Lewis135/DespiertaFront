<template>
  <div class="xl:w-2/7 h-72 flex-col-between p-8 bg-primary rounded shadow-lg">
    <div class>
      <h2 class="text-darkAccent">Recibe noticias</h2>
      <span>Recibe notificaciones con el contenido semanal y mantente informado con nosotros</span>

      <!-- input -->
      <div class="mt-4">
        <input
          class="w-full px-2 rounded"
          type="text"
          placeholder="Han.solo@tatooine.com"
          v-model="emailSubscriber"
        />
      </div>
    </div>

    <!-- Boton -->

    <BotonLink
      text="Suscribirse"
      class="py-1 bg-darkAccent hover:bg-teal-600 transition-duration-250"
    />
  </div>
</template>

<script>
export default {
  name: "newsletterVertical",
  props: {
    emailSubscriber: { default: null },
  },
};
</script>

<style>
</style>