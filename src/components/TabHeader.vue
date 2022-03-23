<template>
  <router-link
    :to="name == 'all' ? '/' : '/' + name + 'tasks'"
    class="tab"
    :class="[active == name ? 'active' : '']"
    @click="$emit('changeactive', name)"
    >{{ name }}</router-link
  >
</template>
<script>
export default {
  props: ["name", "active"],
  emits: ["changeactive"],
};
</script>
<style scoped>
.tab {
  color: #333333;
  font: normal 600 14px/17px "Montserrat";
  text-decoration: none;
  padding: 0px 35px 15px 35px;
  margin: 0px 50px;
  text-transform: capitalize;
}
.active {
  border-bottom: 2px solid #2f80ed;
  border-radius: 4px 4px 0px 0px;
}
</style>
