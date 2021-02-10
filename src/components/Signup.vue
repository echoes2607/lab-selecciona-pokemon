<template>
    <div class="signup">
        <h1>Registro</h1>

        <form @submit.prevent="signup">
            <label>Email de usuario</label>
            <input v-model="form.user" type="email" placeholder="ejemplo@mail.com" class="input-form" :class="{ 'error-form': !$v.form.user.email }" autocomplete="off" />
            <label>Contraseña</label>
            <input v-model="form.password" type="password" placeholder="Escribe una contraseña" class="input-form" :class="{ 'error-form': !$v.form.password.minLength }" autocomplete="off" />
            <label>Confirmar contraseña</label>
            <input v-model="form.confirmPassword" type="password" placeholder="Confirma tu contraseña" class="input-form" :class="{ 'error-form': !$v.form.confirmPassword.minLength }" autocomplete="off"/>
            <input type="submit" value="Registrarse" class="btn btn-white" :disabled="!$v.form.user.email || !$v.form.password.minLength || !$v.form.confirmPassword.minLength || $v.$invalid"/>
        </form>

        <div class="errors-container" v-if="errorMessageSignup">
            <span >{{ errorMessageSignup }}</span>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import {required, minLength, email} from 'vuelidate/lib/validators'

export default {
    name: 'Signup',
    data(){
        return{
            form: {
                user: '',
                password: '',
                confirmPassword: ''
            },
            errorMessageSignup: ''
        }
    },
    methods:{
        signup(){
            if(this.form.password == this.form.confirmPassword){
                firebase.auth().createUserWithEmailAndPassword(this.form.user, this.form.password)
                .then((user)=> {
                    firebase.auth().signOut().then(()=> {
                        alert("¡Registro exitoso! Ahora inicia sesión");
                    });
                }, (error) => {
                            this.errorsSignup(error.code);
                        }
                    );
            }
            else{
                this.errorMessageSignup = '* Las contraseñas no coinciden entre si, intenta de nuevo. *';
            }
            
        },
        errorsSignup(codeError){
            switch(codeError){
                case 'auth/email-already-in-use':
                        this.errorMessageSignup = '* La dirección de correo electrónico ya está siendo utilizada por otra cuenta. *'
                        break;
                default:
                        this.errorMessageSignup = '* Algo salio mal, intenta de nuevo. *'
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
            },
            confirmPassword:{
                required,
                minLength: minLength(6)
            }

        }
    }
}
</script>