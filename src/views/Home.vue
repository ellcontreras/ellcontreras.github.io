<template lang="pug">
  div
    .bg-gray-900.h-screen
      p.text-center.text-red-600.font-black.font-mono.pt-3 PROGRAMMER & MUSICIAN

      img(src="@/assets/developer.svg" class="w-2/5").mx-auto.mt-32
      p.text-white.text-center.text-2xl Luis Contreras Guerra

    info
      
</template>

<script>
import Info from "@/components/Info.vue";

export default {
  name: "home",
  components: { Info }
};
</script>
