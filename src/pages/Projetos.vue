<script setup>
  import { ref } from 'vue';
  import First from '../components/First.vue';
  import Card from '../components/Card.vue';
  import projetos from '../data/projetos';
  import FilterTechs from '../components/FilterTechs.vue';
  import FilterAno from '../components/FilterAno.vue';
  const listProjetos = ref(projetos)
  let filtrandoPorAno = ''
  let filtrandoPorTech = ''
  let filtrando = ''
  let techh = ref('')
  let ano = ref('')

  function filtrandoAno(valor) {
    ano.value = valor
    if(valor == 'todos'){
      listProjetos.value = projetos
    } else {
      filtrandoPorAno = projetos.filter(p => p.ano == valor)
      listProjetos.value = filtrandoPorAno
    }
  }

  function filtrarPorTechs(tech) {
    techh.value = tech
    if(tech == 'todos'){
      listProjetos.value = projetos
    } else {
      filtrandoPorTech = projetos.filter(p => p.tecnologias.includes(tech))
      listProjetos.value = filtrandoPorTech
    }
  }

  // function filtrandoOsDois(){
  //   listProjetos.value = projetos
  //   filtrando = projetos.filter(p => p.tecnologias.includes(techh.value) && p.ano == ano.value)
  //   listProjetos.value = filtrando
  // }

</script>

<template>
  <First :qtd="projetos.length" />
  <hr class="container" />
  <div class="container">
    <div class="d-flex justify-content-end py-2 gap-2">
      <FilterTechs :filtrar="(e)=> filtrarPorTechs(e.target.value)"/>
      <FilterAno :filtrar="(e)=> filtrandoAno(e.target.value)"/>
    </div>

    <h2 class="text-center" v-if="listProjetos.length == 0">Não há projetos!</h2>

    <div class="e__grid py-2 mb-5">
      <Card 
        v-for="(p, index) in listProjetos"
        :key="index"
        :name="p.name" 
        :url="p.url" 
        :ano="p.ano" 
        :description="p.description"
        :techs="p.techs"
      />
    </div>
  </div>
</template>
<style scoped>
.e__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media(max-width: 640px) {
  .e__grid {
    grid-template-columns: repeat(1, 1fr) !important;
  }
}

@media(max-width: 1300px) {
  .e__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
