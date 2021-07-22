<template>
  <div v-if="dev">

    <!-- https://gist.github.com/jonsugar/6bce22bd7d3673294caad36046c2b7cb !-->
    <div class="fixed bottom-0 right-0 py-1.5 px-3 bg-black text-white text-sm">
      <span>Current breakpoint: </span>
      <span class="sm:hidden md:hidden lg:hidden xl:hidden">&lt; sm</span>
      <span class="hidden sm:inline md:hidden font-extrabold">sm</span>
      <span class="hidden md:inline lg:hidden font-extrabold">md</span>
      <span class="hidden lg:inline xl:hidden font-extrabold">lg</span>
      <span class="hidden xl:inline font-extrabold">xl</span>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    // https://vitejs.dev/guide/env-and-mode.html#env-variables
    const dev = import.meta.env.DEV
    return { dev }
  }
}
</script>
