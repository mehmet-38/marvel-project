<template lang="">
  <div>
    <Navbar />
    <v-container>
      <v-row>
        <v-col v-for="item in comics" :key="item">
          <v-card class="mx-auto card" width="344" height="700px">
            <a @click="addFavorite(item.id)">
              <font-awesome-icon
                :icon="['fass', 'heart']"
                class="heart heart-icon"
            /></a>
            <router-link
              :to="`/comics/${item.id}`"
              style="text-decoration: none !important; color: #000"
            >
              <v-img
                :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
                height="300px"
                cover
              >
              </v-img>

              <v-card-title
                class="text-center"
                style="white-space: normal !important"
                color="#fff"
              >
                {{ item.title }}
              </v-card-title>
            </router-link>
            <div v-if="item.description != null && item.description != ''">
              <v-card-subtitle>Description </v-card-subtitle>
              <v-card-text>
                <div>{{ item.description.substring(0, 300) }}...</div>
              </v-card-text>
              <hr />
            </div>

            <div v-if="item.creators.items.length != 0">
              <v-card-subtitle>Creators </v-card-subtitle>
              <v-row style="margin-left: 10px">
                <v-col cols="6" class="font-weight-bold">Role</v-col>
                <v-col cols="6" class="font-weight-bold">Name</v-col>
              </v-row>
            </div>
            <v-row
              v-for="creat in item.creators.items"
              style="margin-left: 10px"
            >
              <v-col cols="6">
                <div class="text-subtitle-1">
                  {{ creat.role }}
                </div>
              </v-col>
              <v-col cols="6">
                <div class="text-subtitle-1">
                  {{ creat.name }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "../components/Navbar.vue";

export default {
  components: { Navbar },
  data() {
    return {
      favoriteItem: [],
    };
  },
  computed: {
    ...mapState("comics", ["comics"]),
  },
  created() {
    this.$store.dispatch("comics/getComics");
  },
  methods: {
    addFavorite(id) {
      this.favoriteItem.push({
        id: id,
      });
    },
  },
  // watch favorite item and set
  watch: {
    favoriteItem: {
      handler(newValue, oldValue) {
        localStorage.setItem("favorite", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
};
</script>
<style>
body {
  background-color: #302d2ded !important;
}
.card {
  box-shadow: 0px 0px 5px 8px rgba(0, 0, 0, 0.37) !important;
}
.heart-icon {
  position: absolute;
  right: 0;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s linear;
  margin: 5px;
}
.heart-icon:hover {
  transform: scale(1.1);
}
</style>
