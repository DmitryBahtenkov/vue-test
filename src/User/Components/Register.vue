<template>
  <v-form ref="form">
      <v-text-field
        v-model="request.firstName"
        label="First Name"
        required
        >
      </v-text-field>

        <v-text-field
        v-model="request.lastName"
        label="Last Name"
        required
        >
      </v-text-field>

        <v-text-field
        v-model="request.middleName"
        label="Middle Name"
        >
      </v-text-field>

        <v-text-field
        v-model="request.login"
        label="Login"
        required
        >
      </v-text-field>

    <v-text-field
        v-model="request.password"
        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        :type="show ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        required
        @click:append="show = !show"
    ></v-text-field>

    <v-btn
        color="success"
        class="mr-4"
        @click="send">
        Submut
    </v-btn>
  </v-form>
</template>

<script>
import CreateUserRequest from '../Models/create.user.request.js'
import axios from 'axios'

const request = new CreateUserRequest();

export default {
    data: () => {
        return {
            show: false,
            request: request
        }
    },
    methods: {
        async send() {
            console.log(request);
            const response = await axios.post('http://localhost:5000/api/user', request);
            console.log(response);
        }
    }
}
</script>

<style>

</style>