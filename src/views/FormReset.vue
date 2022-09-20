<template>
  <div class="card" style="width: 500px; margin: auto; margin-top: 10%">
    <div class="card-body">
      <h2>Forgot Password?</h2>
      <form @submit.prevent="handleReset">
        <div v-if="errorMessages" class="alert alert-danger">
          {{ errorMessages }}
        </div>
        <!--            <div th:if = "${param.error}" class="alert alert-error"> Invalid Username and Password</div>-->
        <!--            <div th:if = "${param.logout}" class="alert alert-error"> You have been logged uout</div>-->

        <!-- Email input -->
        <div class="form-outline mb-4">
          <input
            type="password"
            id="password"
            class="form-control"
            name="password"
            v-model="formData.password"
            required
          />
          <label class="form-label" for="form2Example1"
            >Enter New Password</label
          >

          <input
            id="form2Example1"
            type="password"
            class="form-control"
            v-model="confirmPassword"
            required
          />
          <label class="form-label" for="form2Example1">Confirm Password</label>
        </div>
        <!-- Submit button -->
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Send
        </button>
        <div v-if="confirm">Password Changed Succesfully</div>
      </form>
    </div>
  </div>
</template>

<script>
import packageService from "../services/packageService";
import Reset from "../models/reset";
export default {
  name: "FormReset",
  props: ["token"],
  data() {
    return {
      formData: new Reset(),
      errorMessages: "",
      confirm: false,
      confirmPassword: "",
    };
  },
  methods: {
    handleReset() {
      if (this.formData.password != this.confirmPassword) {
        return (this.errorMessages = "Password does not Match, Try again");
      }
      this.formData.tokenReset = this.token;
      console.log(this.formData.tokenReset);
      packageService
        .formReset(this.formData)
        .then((response) => {
          console.log(response.data);
          this.confirm = true;
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status === 500) {
            this.errorMessages = "Token has expired/Invalid";
          } else {
            this.errorMessages = "Unexpected Error Occurred";
          }
        });
    },
  },
};
</script>

<style scoped></style>
