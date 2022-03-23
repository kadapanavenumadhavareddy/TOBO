<template>
  <div class="todo-tasks">
    <div v-for="(tasks, index) in activetodos" :key="tasks">
      <TodoTask
        :text="tasks.value"
        :status="tasks.status"
        @updatestatus="changestatus(index)"
        tab="completed"
        @delete="deleted(index)"
        v-if="tasks.status == 'completed'"
      />
    </div>
  </div>
  <button style="float: right" @click="reset">delete all</button>
</template>
<script>
import TodoTask from "./TodoTask.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    TodoTask,
  },
  computed: {
    ...mapState({ activetodos: "activetodos" }),
  },
  methods: {
    ...mapActions({ SortandStore: "SortandStore" }),
    changestatus(index) {
      this.$store.commit("CHANGESTATUS", index);
      this.SortandStore();
    },
    deleted(index) {
      this.$store.commit("DELETEITEM", index);
      this.SortandStore();
    },
    reset() {
      this.$store.commit("RESETCOMPLETED");
      this.SortandStore();
    },
  },
};
</script>
<style scoped>
.todo-tasks {
  margin-top: 24px;
}
button {
  background: #eb5757;
  border-radius: 4px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #ffffff;
  padding: 13px 40px;
  border: none;
  margin: 40px 0px;
  cursor: pointer;
}
</style>
