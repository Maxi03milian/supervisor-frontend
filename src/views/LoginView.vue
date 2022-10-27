<template>
  <div class="login">
    <div class="login-title">
      <h1>Supervisor</h1>
      <p>Bringing out the best <br />of your work</p>
    </div>
    <div class="login-form">
      <h4 class="form-title"><b>Log in</b></h4>
      <v-text-field label="Email" color="#ffffff" outlined></v-text-field>
      <v-text-field label="Password" color="#ffffff" outlined></v-text-field>
      <v-btn class="form-button" elevation="10" color="#193864" block rounded>Log in</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style scoped>
.login {
  text-align: left;
  padding: 10% 5%;
}
.login-title {
  font-size: 1.5rem;
}
.login-form {
  margin-top: 2rem;
}

.form-title {
  margin-bottom: 1rem;
}

.form-button{
  height: 3rem;
}
</style>
