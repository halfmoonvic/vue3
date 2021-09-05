<script setup lang="ts">
// third party tools and libraries
// local functions and variables
// local components
import { onMounted, onRenderTracked, onRenderTriggered } from 'vue';
import Home from './views/Home.vue';

const handler = value => {
  console.log(value);
};

onMounted(() => {
  console.log('App.vue mounted');
});
</script>

<template>
  <home @sendMsg="handler" />
</template>

<style lang="scss" scoped>
.fea {
  .fe {
    width: 10px;
  }
}
</style>
