<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Pay For Order</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="errorMessages">
              {{ errorMessages }}
            </div>
            <form @submit.prevent="handlePay">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  readonly
                  v-model="formCheck.id"
                  hidden
                />
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Mode of Delivery</label>
                <select
                  v-model="formCheck.deliveryType"
                  formclass="form-control"
                  id="exampleFormControlSelect1"
                >
                  <option v-for="(type, ind) in deliveryType" :key="ind">
                    {{ type }}
                  </option>
                </select>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  @click="handleClose"
                >
                  Close
                </button>
                <button @click="submitted = true" class="btn btn-primary">
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import PackagePay from "../models/packagepay";
import deliveryType from "../models/deliveryType";
import packageService from "../services/packageService";
export default {
  name: "Paymodal",
  id: "",
  props: {
    show: Boolean,
    selectedOrder: Number,
  },
  data() {
    return {
      deliveryType: [deliveryType.PICKUP, deliveryType.HOME],
      formCheck: new PackagePay(),
      submitted: false,
      errorMessages: "",
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handlePay() {
      this.formCheck.id = this.newId;
      console.log(this.formCheck.id);
      console.log("hello");
      console.log(this.formCheck);
      packageService
        .payPackage(this.formCheck)
        .then(() => {
          console.log("doone");
          this.handleClose();
        })
        .catch((err) => {
          console.log(err);
          if (err?.response?.status === 403) {
            this.errorMessages = "You do not have sufficient Balance for this";
          } else {
            this.errorMessages = "Unexpected Error Occurred";
          }
        });
    },
  },
  computed: {
    newId() {
      return this.selectedOrder;
    },
  },
  // mounted() {
  //   console.log(this.selectedOrder),
  //     console.log(this.deliveryType),
  //     (this.id = this.selectedOrder);
  // },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
