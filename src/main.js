import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import { createRouter, createWebHashHistory } from "vue-router";
import AllTasks from "../src/components/AllTasks.vue";
import CompletedTasks from "../src/components/CompletedTasks.vue";
import ActiveTasks from "../src/components/ActiveTasks.vue";
let app = createApp(App);
let router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", component: AllTasks },
    { path: "/activetasks", component: ActiveTasks },
    { path: "/completedtasks", component: CompletedTasks },
  ],
});
let store = createStore({
  state() {
    return {
      activetodos:
        JSON.parse(localStorage.getItem("activetodo")) == null
          ? []
          : JSON.parse(localStorage.getItem("activetodo")),
      active:
        localStorage.getItem("status") == null
          ? "all"
          : localStorage.getItem("status"),
    };
  },
  mutations: {
    NEWITEM(state, payload) {
      state.activetodos.push({ value: payload, status: "active" });
    },
    LOCALSETITEM(state) {
      localStorage.setItem("activetodo", JSON.stringify(state.activetodos));
    },
    TODOSORT(state) {
      state.activetodos.sort((a, b) =>
        a.status > b.status ? 1 : b.status > a.status ? -1 : 0
      );
    },
    CHANGESTATUS(state, index) {
      state.activetodos[index].status =
        state.activetodos[index].status == "active" ? "completed" : "active";
    },
    DELETEITEM(state, payload) {
      state.activetodos.splice(payload, 1);
    },
    RESETCOMPLETED(state) {
      state.activetodos = state.activetodos.filter((val) => {
        if (val.status == "active") {
          return val;
        }
      });
    },
    STATUSLOCAL(state, payload) {
      state.active = payload;
      localStorage.setItem("status", payload);
    },
  },
  actions: {
    SortandStore(context) {
      context.commit("TODOSORT");
      context.commit("LOCALSETITEM");
    },
  },
});
app.use(store);
app.use(router);
app.mount("#app");
