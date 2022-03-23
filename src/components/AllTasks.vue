<template>
  <TodoBody />
  <div class="todo-tasks">
    <TodoTask
      v-for="(tasks, index) in activetodos"
      :key="tasks"
      :text="tasks.value"
      :status="tasks.status"
      @updatestatus="changestatus(index)"
    />
  </div>
</template>
<script>
import TodoTask from "./TodoTask.vue";
import TodoBody from "./TodoBody.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    TodoBody,
    TodoTask,
  },
  data() {
    return {
      test: "no",
      ip: "",
    };
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
  },
};
</script>
