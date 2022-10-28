<template>
  <div class="login">
    <div class="login-title" ref="title">
      <h1>SUPERVISOR</h1>
      <p>Bringing out the best <br />of your work</p>
    </div>
    <div class="login-form" ref="form">
      <h4 class="form-title"><b>Log in</b></h4>
      <v-text-field
        @focus="focusInputs"
        @blur="unfocusInputs"
        label="Email"
        color="#ffffff"
        outlined
      ></v-text-field>
      <v-text-field
        @focus="focusInputs"
        @blur="unfocusInputs"
        label="Password"
        color="#ffffff"
        outlined
      ></v-text-field>
      <v-btn class="form-button" elevation="10" color="#193864" block rounded
        >Log in</v-btn
      >
      <br />
      <hr />
      <div class="form-register">
        <p class="register-text">Don't have an account?</p>
        <v-btn class="form-button" elevation="10" color="#193864" block rounded
          >Register</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const title = ref(null);
    const form = ref(null);
    function focusInputs() {
      title.value.classList.add("title-move");
      form.value.classList.add("form-move");
    }
    function unfocusInputs() {
      title.value.classList.remove("title-move");
      form.value.classList.remove("form-move");
    }
    return {
      focusInputs,
      unfocusInputs,
      title,
      form,
    };
  },
};
</script>

<style scoped>
.login {
  text-align: left;
  padding: 10% 5%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.login-title {
  font-size: 1.5rem;
  transition: all 0.25s ease;
}
.login-form {
  transition: all 0.25s ease;
}

.form-title {
  margin-bottom: 1rem;
}

.form-button {
  height: 3rem;
}

.title-move {
  opacity: 0;
  transform: translateY(-100%);
  transition: all 0.25s ease;
}

.form-move {
  transform: translateY(-100%);
  transition: all 0.25s ease;
}

.form-register {
  margin-top: 2rem;
}

.register-text {
  margin-bottom: 1rem;
}
</style>
