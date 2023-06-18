<template>
  <div>
    <div class="navbar">
      <img src="../assets/img/marvel-logo.jpg" alt="" class="logo" />

      <v-badge content="2" color="error" class="badge">
        <font-awesome-icon :icon="['fass', 'heart']" class="heart" />
      </v-badge>
    </div>
    <header class="banner"></header>
  </div>
</template>
<script>
export default {};
</script>
<style>
.navbar {
  position: absolute;
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 0;
  z-index: 1;
  margin-bottom: 5rem;
}
.banner {
  background-image: url(../assets/img/marvel-comics2.jpg);
  background-size: cover;
  background-position: center center;
  color: white;
  object-fit: contain;
  height: 448px;
}
.logo {
  margin-left: 15px;
  margin-top: 15px;
}
.heart {
  font-size: 30px;

  color: red;
}
.badge {
  margin-top: 25px;
  margin-right: 25px;
}
</style>
