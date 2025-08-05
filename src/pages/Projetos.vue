<script setup>
  import { ref } from 'vue';
  import Dashboard from '../layout/Dashboard.vue';
  import Header from '../components/HeaderPages.vue';
  import Card from '../components/Card.vue';
  import projetos from '../data/projetos';
  import FilterAno from '../components/FilterAno.vue';
  import TitlePagesIcon from '../components/TitlePagesIcon.vue';
  import techs from '../data/techs';
  import Select from '../components/Select.vue';
  const listProjetos = ref(projetos)
  const listOptions = ref(techs);
  const firstOption = 'Selecione tecnologias';
  let filtrandoPorAno = ''
  let filtrandoPorTech = ''
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

</script>

<template>
  <Dashboard>
    <!-- Title Page na navbar -->
    <template v-slot:iconAndTitle>
      <TitlePagesIcon 
        icon-desc="bi bi-eyeglasses" 
        title="Portfólio de Projetos"
      />
    </template>

    <Header :qtd="projetos.length" />

    <hr class="container" />

    <div class="container">
      <div class="d-flex justify-content-end py-2 gap-2">
        <FilterAno :filtrar="(e)=> filtrandoAno(e.target.value)"/>
        <Select 
          :list-options="listOptions" 
          :first-option="firstOption" 
          :filtrar="(e)=> filtrarPorTechs(e.target.value)"
        />
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
  </Dashboard>
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
