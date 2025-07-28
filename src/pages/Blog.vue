<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id

</script>
<template>
  <main>
    <h1>Blog - Assunto {{ id }}</h1>
  </main>
</template>