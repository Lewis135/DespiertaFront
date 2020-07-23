<template>
  <div class="flex justify-center py-8">
    <div class="max-w-screen-xl w-full mx-32">
      <div class="text-4xl font-semibold">Publicaciones</div>

      <div class="flex">
        <div>Tipo de post:</div>
        <label class="w-32 bg-primary rounded px-2 mx-2">Mindfulness</label>
      </div>
      <div class="flex h-72 my-3">
        <div class="md:w-6/12 xl:w-5/12 h-full px-4">
          <summaryPostPanoramic titulo="Ultimo post publicado" />
        </div>

        <div class="md:w-6/12 xl:w-4/12 px-3 flex flex-col justify-between">
          <summaryPostMini class="h-20" />

          <summaryPostMini class="h-20" />

          <summaryPostMini class="h-20" />
        </div>
        <div class="w-3/12 hidden xl:block">
          <summaryPostPanoramic titulo="Ultimo post destacado" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import summaryPost from "~/components/blog/summaryPost";
import summaryPostPanoramic from "~/components/blog/summaryPostPanoramic";
import summaryPostMini from "~/components/blog/summaryPostMini";

export default {
  name: "blogPrincipal",
  components: {
    summaryPost,
    summaryPostPanoramic,
    summaryPostMini
  }
};
</script>

<style>
</style>