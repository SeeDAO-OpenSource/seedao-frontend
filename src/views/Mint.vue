<script>
import MintBanner from "@/components/mint/MintBanner.vue";
import MintContent from "@/components/mint/MintContent.vue";

export default {
  name: "NFT",
  components: {
    MintBanner,
    MintContent,
  },
  data: () => {
    return {};
  },
  mounted() {},
  updated() {},
  methods: {},
};
</script>

<template>
  <div>
    <MintBanner />
    <div class="container mx-auto">
      <MintContent />
    </div>
  </div>
</template>

<style scoped></style>
