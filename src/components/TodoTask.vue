<template>
  <div class="task">
    <div class="todo-task">
      <input
        type="checkbox"
        class="cb"
        true-value="yes"
        false-value="no"
        @input="
          () => {
            $emit('updatestatus');
          }
        "
        v-model="test"
      />
      <div
        class="todo-check"
        :class="[status == 'completed' ? 'line-through' : '']"
      >
        {{ text }}
      </div>
    </div>
    <span
      class="material-icons"
      v-if="tab == 'completed'"
      @click="
        () => {
          $emit('delete');
        }
      "
    >
      delete
    </span>
  </div>
</template>
<script>
export default {
  props: ["text", "status", "tab"],
  emits: ["updatestatus", "delete"],
  data() {
    return {
      test: this.status == "active" ? "no" : "yes",
    };
  },
};
</script>
<style scoped>
.cb {
  border: 1px solid #828282;
  box-sizing: border-box;
  border-radius: 4px;
  width: 20px;
  height: 20px;
}
.todo-check {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-left: 7px;
  color: #000000;
  text-transform: capitalize;
}
.todo-task {
  display: flex;
  margin-bottom: 29px;
}
.line-through {
  text-decoration: line-through;
}
.task {
  display: flex;
  justify-content: space-between;
}
span {
  color: red;
  cursor: pointer;
}
</style>
