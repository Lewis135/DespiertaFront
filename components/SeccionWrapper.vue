<template>
  <div :class="[twMinH, twpy]" class="w-full max-w-screen-xl mx-auto px-12">
    <div v-if="pretitle" class="text-3xl text-green-400 mb-4 text-center">{{pretitle}}</div>
    <div
      v-if="title"
      :class="twColorTitle"
      class="text-4xl font-bold uppercase text-center"
    >{{title}}</div>

    <slot></slot>

    <div class="my-4 transition-duration-500" v-if="sectionLinkUrl && sectionLinkText">
      <h3 class="w-64 mx-auto hover:italic cursor-pointer text-darkAccent uppercase">
        <a :href="sectionLinkUrl">{{sectionLinkText}} ></a>
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "SecctionWrapper",
  props: {
    pretitle: { type: String, required: false, default: null },
    title: { type: String, required: false, default: null },
    sectionLinkText: { type: String, required: false, default: null },
    sectionLinkUrl: { type: String, required: false, default: null },
    twColorTitle: { type: String, required: false, default: "" },
    twMinH: { type: String, required: false, default: "min-h-screen" },
    twpy: { type: String, required: false, default: "py-24" },
  },
};
</script>

<style>
</style>