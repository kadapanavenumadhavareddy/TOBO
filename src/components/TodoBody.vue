<template>
  <div class="todo-body">
    <input
      type="text"
      placeholder="add details"
      class="txt"
      v-model="inputvalue"
    />
    <button @click="store">Add</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["status"],
  data() {
    return {
      inputvalue: "",
    };
  },
  methods: {
    ...mapActions({ SortandStore: "SortandStore" }),
    store() {
      this.$store.commit("NEWITEM", this.inputvalue);
      this.SortandStore();
    },
  },
};
</script>
<style scoped>
.txt {
  padding: 20px 12px;
  width: 476px;
  border: 1px solid #bdbdbd;
  border-radius: 12px;
  margin: 18px 25px 30px 0px;
  outline: none;
}
.todo-body {
  width: max-content;
}
button {
  background: #2f80ed;
  box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
  border-radius: 12px;
  padding: 20px 40px;
  border: none;
  font: normal 600 14px/17px "Montserrat";
  color: #ffffff;
}
</style>
