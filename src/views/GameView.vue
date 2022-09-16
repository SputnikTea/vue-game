<script setup lang="ts">
import { reactive, ref } from "vue";

const fields = reactive(Array<string>(9).fill("_"));
let nextPlayer = ref("X");

function handleFieldClick(fieldIndex: number) {
  fields[fieldIndex] = nextPlayer.value;
  nextPlayer.value = nextPlayer.value === "X" ? "O" : "X";
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
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.board div {
  background-color: hotpink;
}
</style>
