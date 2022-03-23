<template>
  <TodoBody />
  <div class="todo-tasks">
    <div v-for="(tasks, index) in activetodos" :key="tasks">
      <TodoTask
        :text="tasks.value"
        :status="tasks.status"
        @updatestatus="changestatus(index)"
        v-if="tasks.status == 'active'"
      />
    </div>
  </div>
</template>
<script>
import TodoBody from "./TodoBody.vue";
import TodoTask from "./TodoTask.vue";
import { mapState, mapActions } from "vuex";
export default {
  components: {
    TodoTask,
    TodoBody,
  },
  data() {
    return {
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
      this.$store.commit("TODOSORT");
      this.SortandStore();
    },
  },
};
</script>
