<script setup lang="ts">
// third party tools and libraries
// local functions and variables
// local components
import { onMounted } from 'vue';
import Test from './test2.vue';

function handler(value) {
  console.log(value);
}

onMounted(() => {
  console.log('App.vue mounted');
});
</script>

<template>
  <test @sendMsg="handler" />
</template>

<style lang="scss" scoped>
.fea {
  .fe {
    width: 10px;
    color: #fff;
  }
}
</style>
