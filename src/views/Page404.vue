<template>
  <div class="not-found-page">
    <div class="forms-container">
      <div class="col col-form-instructions">
        <h2>¡Ups! Algo anda mal</h2>
        <p>Parece que escribiste mal la ruta a donde quieres navegar.</p>
      </div>

      <div class="col col-form-forms">
          <h1>Error 404</h1>
          <p>¿Te parece si vamos al inicio?</p>
          <router-link to="/" class="btn btn-white">Ir a inicio</router-link>
      </div>

      <span class="bg-form"><img src="../assets/poke.png" /></span>
    </div>
  </div>
</template>


