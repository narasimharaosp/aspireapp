<template>
  <div>
    <div v-b-modal.modal-prevent-closing class="new-card">
      <img src="~assets/icons/box.svg" alt="new card" />
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
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

  export default {
    data() {
      return {
        name: '',
        nameState: null
      }
    },
    methods: {
      ...mapMutations([
        'addNewCard'
      ]),
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        this.nameState = valid
        return valid
      },
      resetModal() {
        this.name = ''
        this.nameState = null
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        // Push the name to card object inturn to cards state
        this.$store.commit('addNewCard', this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    }
  }
</script>
<style lang="scss">
.modal{
  color: $black-two;
}
.new-card img{
  width: 16px;
  height: 16px;
  margin-bottom: 2px;
}
</style>