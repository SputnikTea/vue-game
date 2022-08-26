<script setup lang="ts">
import { ref } from "vue";

const fields = ref(Array(9).fill("_"));

function handleFieldClick(fieldIndex: number) {
  fields.value[fieldIndex] = "X";
}
</script>

<template>
  <h1>Game View</h1>

  <div class="board">
    <div
      v-for="(field, index) in fields"
      :key="index"
      @click="handleFieldClick(index)"
    >
      {{ field }}
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}

.board div {
  background-color: hotpink;
}
</style>
