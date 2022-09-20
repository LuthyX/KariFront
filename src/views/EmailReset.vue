<template>
  <div class="card" style="width: 500px; margin: auto; margin-top: 10%">
    >
    <div class="card-body">
      <h2>Forgot Password?</h2>
      <form @submit.prevent="handleReset">
        <!--            <div th:if = "${param.error}" class="alert alert-error"> Invalid Username and Password</div>-->
        <!--            <div th:if = "${param.logout}" class="alert alert-error"> You have been logged uout</div>-->

        <!-- Email input -->
        <div v-if="errorMessages" class="alert alert-danger">
          {{ errorMessages }}
        </div>
        <div class="form-outline mb-4">
          <input
            type="text"
            id="form2Example1"
            class="form-control"
            name="email"
            v-model="formData.email"
          />
          <label class="form-label" for="form2Example1">Email address</label>
        </div>
        <!-- Submit button -->
        <button
          type="submit"
          class="btn btn-primary btn-block mb-4"
          value="Login"
        >
          Send
        </button>
      </form>
      <p v-if="sent">Kindly check your email</p>
    </div>
  </div>
</template>

<script>
import Reset from "../models/reset";
import packageService from "../services/packageService";
export default {
  name: "EmailReset",
  data() {
    return {
      formData: new Reset(),
      errorMessages: "",
      sent: false,
    };
  },
  methods: {
    handleReset() {
      packageService
        .emailReset(this.formData)
        .then((response) => {
          console.log(response.data);
          this.sent = true;
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status === 500) {
            this.errorMessages = "Email is not valid";
          } else {
            this.errorMessages = "Unexpected Error Occurred";
          }
        })
        .then(() => (this.loading = false));
    },
  },
};
</script>

<style scoped></style>
