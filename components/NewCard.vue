<template>
  <div>
    <div v-b-modal.modal-prevent-closing class="new-card">
      <img src="~assets/icons/box.svg" alt="new card" class="mobile-plus" />
      <img src="~assets/icons/WhitePlus.svg" alt="new card" class="desktop-plus"/>
      New card
    </div>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add a new card"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.prevent="handleSubmit">
        <label for="name">Name</label>
        <input id="name" v-model="name" type="text" name="name" class="form-control" :class="{ 'is-invalid': submitted && $v.name.$error }" />
        <div v-if="submitted && $v.name.$error" class="invalid-feedback">
          <span v-if="!$v.name.required">Name is required</span>
          <span v-if="!$v.name.minLength">Name must be at least 6 characters</span>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, minLength } from "vuelidate/lib/validators"

export default {
  data() {
    return {
      name: '',
      submitted: false
    }
  },
  validations: {
    name: { required, minLength: minLength(6) },
    submitted: false
  },
  computed: {
    randomDate () {
      const nextYear = new Date().getFullYear() + 1
      const nextFive = nextYear + 5
      let randomMonth = parseInt(Math.random() * (12 - 1) + 1)
      randomMonth = (randomMonth < 10) ? ("0" + randomMonth) : randomMonth;
      const year = parseInt(Math.random() * (nextFive - nextYear) + nextYear)
      const rY = year.toString()
      const randomYear = rY.slice(rY.length - 2)
      return randomMonth + '/' + randomYear
    }
  },
  methods: {
    ...mapMutations([
      'addNewCard'
    ]),
    resetModal() {
      this.name = ''
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      this.submitted = true
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return
      }

      // Push the name to card object inturn to cards state
      const rnd = this.getRandomNumber(16)
      const last = rnd.slice(rnd.length - 4)
      const cardType = (Math.random()>=0.5)? 'visa' : 'master';
      const newCard = {
        fullNumber: rnd,
        lastNumber: last,
        type: cardType,
        name: this.name,
        validity: this.randomDate,
        cvv: '***',
        frozen: false,
        transactions: []
      }
      this.$store.commit('addNewCard', newCard)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
    getRandomNumber (digit) {
      return Math.random().toFixed(digit).split('.')[1];
    }
  }
}
</script>
<style lang="scss">
.modal{
  color: $black-two;
}
.new-card{
  font-size: 13px;
  color: $blue-color;
  @include sm{
    width: 109px;
    height: 35px;
    background-color: $new-blue;
    border-radius: 10px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: $white;
    font-weight: 400;
  }
}
.new-card img{
  width: 16px;
  height: 16px;
  margin-bottom: 2px;
}
.mobile-plus {
  @include sm{
    display: none;
  }
}
.desktop-plus {
  display: none;
  @include sm{
    display: block;
  }
}
</style>