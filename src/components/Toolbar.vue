<template>
    <div class="toolbar" :class="{'toolbar-dark': $store.getters.darkMode}">
        <div class="user-container">
            <img src="@/assets/icon-user.png" class="icon-user"/>
            <p>{{ username }}</p>
        </div>
        <img src="@/assets/logo.png" class="logo-pokemon" />

        <nav class="nav">
            <ul>
                <router-link to="/home"><li>Inicio</li></router-link>
                <router-link to="/home"><li>Habilidades</li></router-link>
                <li @click="logout">Cerrar sesión</li>
                <li class="switch-dark-mode dark-disabled" @click="$store.dispatch('toggleDarkModeAction')">Modo oscuro</li>
            </ul>
        </nav>
    </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'Toolbar',
    data(){
        return{
            username : this.setUsername()
        }
    },
    methods: {
        logout(){
            firebase.auth().signOut().then(()=> this.$router.replace('/'));
        },
        setUsername(){
            let username = firebase.auth().currentUser.email;
            return username = username.substring(0,username.indexOf('@'));
        }
    }
}
</script>