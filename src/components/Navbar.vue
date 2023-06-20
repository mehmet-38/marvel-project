<template>
  <div>
    <div class="navbar">
      <router-link to="/">
        <img src="../assets/img/marvel-logo.jpg" alt="" class="logo" />
      </router-link>
      <v-badge
        :content="
          favoriteItem.length == 0 || favoriteItem[0].length == 0
            ? 0
            : favoriteItem[0].length
        "
        color="error"
        class="badge"
      >
        <font-awesome-icon :icon="['fass', 'heart']" class="heart" />
      </v-badge>
    </div>
    <header class="banner"></header>
  </div>
</template>
<script>
export default {
  data() {
    return {
      favoriteItem: [],
    };
  },

  created() {
    //console.log(this.favoriteItem);

    if (localStorage.getItem("favorite")) {
      const value = JSON.parse(localStorage.getItem("favorite"));
      if (value) {
        this.favoriteItem.push(JSON.parse(localStorage.getItem("favorite")));
      }
    }
  },
};
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
  width: 150px;
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
