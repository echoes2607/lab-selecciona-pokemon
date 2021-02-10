<template>
    <div class="login">
        <h1>Iniciar sesión</h1>

        <form @submit.prevent="login" id="formLogin">
            <div class="form-group">
                <label>Email de usuario</label>
                <input v-model="form.user" type="text" placeholder="ejemplo@mail.com" class="input-form" :class="{ 'error-form': !$v.form.user.email }" autocomplete="off"/>
            </div>
            <div class="form-group">
                <label>Contraseña</label>
                <input v-model="form.password" type="password" placeholder="Escribe tu contraseña" class="input-form" :class="{ 'error-form': !$v.form.password.minLength }" autocomplete="off"/>
            </div>
            <input type="submit" value="Acceder" class="btn btn-white btn-login" :disabled="!$v.form.user.email || !$v.form.password.minLength || $v.$invalid"/>
        </form>

        <div class="errors-container" v-if="errorMessageAuth">
            <span >{{ errorMessageAuth }}</span>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import {required, minLength, email} from 'vuelidate/lib/validators'

export default {
    name: 'Login',
    data(){
        return{
            form:{
                user: '',
                password: ''
            },
            errorMessageAuth: ''
        }
    },
    methods:{
        login(){
            this.$v.$touch();
            if(this.$v.$invalid){ return false }

            firebase.auth().signInWithEmailAndPassword(this.form.user, this.form.password)
            .then((user)=> {
                this.$router.replace('home');
            }, 
                (error) => { 
                    this.errorsAuth(error.code);
                }
            );
        },
        errorsAuth(codeError){
            switch(codeError){
                case 'auth/user-not-found':
                        this.errorMessageAuth = '* Email incorrecto, verifica si lo escribiste correctamente. *'
                        break;
                case 'auth/wrong-password':
                        this.errorMessageAuth = '* La contraseña ingresada es incorrecta. *'
                        break;
                default:
                        thie.errorMessageAuth = '* Algo salio mal, intenta de nuevo. *'
            }
        }
    },
    validations: {
        form:{
            user: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            }

        }
    }
}
</script>