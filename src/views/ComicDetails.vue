<template lang="">
  <div>
    {{ $route.params.id }}
  </div>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("comicDetails/getComicDetails", this.$route.params.id);
  },
};
</script>
<style lang=""></style>
