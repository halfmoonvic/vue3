<script setup lang="ts">
// third party tools and libraries
// local functions and variables
// local components
import { reactive, computed } from 'vue';

const state = reactive({
  value: '',
  editValue: '',
  lists: [
    {
      name: 'item1',
      checked: false,
      idEdit: false,
    },
    {
      name: 'item2',
      checked: false,
      idEdit: false,
    },
    {
      name: 'item3',
      checked: false,
      idEdit: false,
    },
  ],
  finish: computed(() => state.lists.filter(item => item.checked)),
});

function add() {
  state.lists.push({
    name: state.value,
    checked: false,
    isEdit: false,
  });

  state.value = '';
}

// eslint-disable-next-line
let editIndex = 0;

function showEdit(item, index) {
  editIndex = index;
  item.isEdit = true;
  state.editValue = item.name;
}
</script>

<template>
  <h1>未完成</h1>
  <h3>
    共有{{ state.lists.length }} 个任务,其中 {{ state.finish.length }}项已完成
  </h3>
  <ul class="list-group">
    <template v-for="(item, index) in state.lists">
      <li v-if="!item.checked" :key="index" class="list-group-item">
        <div class="form-group form-check">
          <input
            :id="'item-' + index"
            v-model="item.checked"
            type="checkbox"
            class="form-check-input"
            @click="() => (item.checked = !item.checked)"
          />
          <label
            v-if="!item.isEdit"
            class="form-check-label"
            @dblclick="showEdit(item, index)"
            >{{ item.name }}</label
          >
          <label v-else class="form-check-label" :for="'item-' + index">
            <input v-model="state.editValue" type="text" />
          </label>
        </div>
      </li>
    </template>
  </ul>

  <h1>已完成</h1>

  <ul class="list-group">
    <li
      v-for="(item, index) in state.finish"
      :key="'finish' + index"
      class="list-group-item"
    >
      <div class="form-group form-check">
        <input
          :id="'finished-item-' + index"
          v-model="item.checked"
          disabled="true"
          type="checkbox"
          class="form-check-input"
        />
        <label class="form-check-label" :for="'finished-item-' + index">{{
          item.name
        }}</label>
      </div>
    </li>
  </ul>
  <h3>添加新的 task</h3>
  <div class="form-group">
    <label for="add">添加</label>
    <input
      id="add"
      v-model="state.value"
      @keydown.enter="add"
      type="text"
      class="form-control"
      aria-describedby="emailHelp"
    />
    <small id="emailHelp" class="form-text text-muted"
      >We'll never share your email with anyone else.</small
    >
    <button type="button" class="btn btn-primary" @click="add">Primary</button>
  </div>
</template>

<style lang="scss" scoped></style>
