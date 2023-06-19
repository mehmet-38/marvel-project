<template>
  <div>
    <Navbar :favoriteItem="favoriteItem" />
    <v-card
      class="mx-auto mt-15"
      max-width="1000"
      v-for="item in comic"
      :key="item"
    >
      <v-img
        class="align-end text-white"
        height="600"
        width="1000"
        :src="`${item.thumbnail.path}.${item.thumbnail.extension}`"
        cover
      >
        <v-card-title>{{ item.title }}</v-card-title>
      </v-img>
      <h3 class="black" style="margin-left: 15px; margin-bottom: -15px">
        Series
      </h3>
      <v-card-subtitle class="pt-4">
        {{ item.series.name }}
      </v-card-subtitle>
      <v-card-text>
        {{ item.description }}
      </v-card-text>
      <div v-if="item.creators.items.length != 0">
        <v-card-text>
          <h3>Creators</h3>

          <v-row style="margin-left: 10px">
            <v-col cols="3" class="font-weight-bold">Role</v-col>
            <v-col cols="3" class="font-weight-bold">Name</v-col>
          </v-row>
          <v-row v-for="creat in item.creators.items" style="margin-left: 10px">
            <v-col cols="3">
              <div class="text-subtitle-1">
                {{ creat.role }}
              </div>
            </v-col>
            <v-col cols="3">
              <div class="text-subtitle-1">
                {{ creat.name }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
      <div v-if="item.stories.items.length != 0">
        <v-card-text>
          <h3>Stories</h3>

          <v-row style="margin-left: 10px">
            <v-col cols="3" class="font-weight-bold">Name</v-col>
            <v-col cols="3" class="font-weight-bold">Type</v-col>
          </v-row>
          <v-row v-for="story in item.stories.items" style="margin-left: 10px">
            <v-col cols="3">
              <div class="text-subtitle-1">
                {{ story.name }}
              </div>
            </v-col>
            <v-col cols="3">
              <div class="text-subtitle-1">
                {{ story.type }}
              </div>
            </v-col>
          </v-row>
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar },

  computed: {
    ...mapState("comicDetails", ["comic"]),
  },
  mounted() {
    this.$store.dispatch("comicDetails/getComicDetails", this.$route.params.id);
    this.favoriteItem = localStorage.getItem("favorite");

    //console.log(this.comic);
  },
};
</script>
<style></style>
