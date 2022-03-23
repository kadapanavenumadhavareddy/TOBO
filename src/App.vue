<template>
  <div class="todo">
    <div class="todo-title">#TODO</div>
    <div class="todo-navigation">
      <TabHeader
        v-for="tab in tabs"
        :key="tab"
        :active="active"
        :name="tab"
        @changeactive="changestatus"
      />
    </div>
    <router-view></router-view>
  </div>

  <div class="footer">created by {{ username }} - devChallenges.io</div>
</template>

<script>
import TabHeader from "../src/components/TabHeader.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "App",
  data() {
    return {
      username: "venumadhavareddy",
      tabs: ["all", "active", "completed"],
    };
  },
  computed: {
    ...mapState({ active: "active" }),
  },
  methods: {
    ...mapMutations({ changestatus: "STATUSLOCAL" }),
  },
  components: {
    TabHeader,
  },
};
</script>

<style>
.todo-title {
  text-align: center;
  letter-spacing: -0.045em;
  color: #333333;
  font: normal 700 36px/42px "Raleway";
}
.todo-navigation {
  margin-top: 32px;
  padding: 15px 0px;
  border-bottom: 1px solid #bdbdbd;
  width: max-content;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: min-content;
  margin: auto;
}
.todo {
  flex-grow: 1;
}
.footer {
  font: normal 500 14px/17px "Montserrat";
  text-align: center;
  color: #a9a9a9;
  margin-bottom: 24px;
}
</style>
