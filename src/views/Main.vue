<template>
  <div class="main">
    <div class="forms-container">
      <div class="col col-form-instructions">
        <h2>¡Bienvenido entrenador!</h2>
        <p>A través de esta app podrás selecionar tu equipo de seis Pokémon y ver sus caracteristicas, tipos, ataques, etc.</p>

        <button v-if="!loginIsVisible" class="btn btn-light" @click="toggleLoginVisible">Iniciar sesión</button>
        <div v-else>
          <h3>¿No tienes cuenta?</h3>
          <button class="btn btn-light" @click="toggleLoginVisible">Crear cuenta</button>
        </div>
        
      </div>

      <div class="col col-form-forms">
        <Login v-if="loginIsVisible"/>
        <Signup v-else />
      </div>

      <span class="bg-form"><img src="../assets/poke.png" /></span>
    </div>
    
  </div>
</template>

<script>
import Login from'../components/Login';
import Signup from'../components/Signup';

export default {
  name: 'Main',
  components:{
    Login,
    Signup
  },
  data(){
    return{
      loginIsVisible : true
    }
  },
  methods:{
    toggleLoginVisible(){
        this.loginIsVisible = !this.loginIsVisible;
    }
  }
}
</script>
