<template>
  <StarCanvas />
  <NebulaComponent />
</template>

<script>
import { defineComponent } from "vue";
import StarCanvas from "./components/StarCanvas.vue";
import NebulaComponent from "./components/NebulaComponent.vue";

export default defineComponent({
  components: {
    StarCanvas,
    NebulaComponent
  }
});
</script>

<style>
body {
  margin: 0;
  overflow: hidden;
  background: black;
}
</style>