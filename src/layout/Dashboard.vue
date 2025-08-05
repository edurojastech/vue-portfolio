<template>
   <div>
      <nav class="nav navbar text-white shandow d-flex justify-content-between align-items-center" id="navBarMain">
        <div class="d-flex gap-2 px-1">
          <button class="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">
            <i class="bi bi-list text-light" style="font-size: 24px;"></i>
          </button>
          <img src='https://eduardorojas.com.br/assets/logoEdu.svg' alt="LOGO" width="160"/>
        </div>
        <div class="d-flex gap-4" id="links">
          <h4 style='font-size:32px;'>
            <slot name="iconAndTitle"></slot>
          </h4>
        </div>
        <div class="px-4">
          <h5 class="pt-2" style='font-size:32px;'>
            <i class="bi bi-robot"></i>
            Olá {{ userName }}!
          </h5>
        </div>
      </nav>

      <div>
        <slot></slot>
      </div>


      <!-- {/* menu lateral */} -->
      <div class="offcanvas offcanvas-start" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
        <div class="offcanvas-header bg-dark px-4">
          <img src='https://eduardorojas.com.br/assets/logoEdu.svg' alt="LOGO" width="120"/>
          <button type="button" class="btn-close btn-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body px-5">
          <div>
            <router-link to='/' class="nav-link" style="font-size: 24px;">
              <i class="bi bi-person-fill"></i> Home
            </router-link>
          </div>
          <div>
            <router-link to='/projetos' class="nav-link" style="font-size: 24px;">
              <i class="bi bi-rocket-takeoff-fill"></i> Projetos
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
const userName = ''


</script>
<style scoped>
#navBarMain {
  background-color: #0B1424;
}

@media(max-width: 632px) {
  #links {
    display: none !important;
  }
}
</style>