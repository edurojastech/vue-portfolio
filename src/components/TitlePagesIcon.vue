<template>
  <i :class="iconDesc"></i>
  {{  title }}
</template>
<script setup>
import { defineProps } from 'vue';
defineProps({
  title: String,
  iconDesc: String
})

</script>