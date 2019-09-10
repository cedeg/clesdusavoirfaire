<template>
  <section class="section">
    <h2 class="has-text-primary is-size-3 is-size-4-mobile">
      Contact
    </h2>
    <div class="is-divider"></div>
    <div class="field">
      <label class="label has-text-primary">Nom</label>
      <div class="control">
        <input class="input" v-model.trim.lazy="name" />
      </div>
    </div>
    <div class="field">
      <label class="label has-text-primary">Mail</label>
      <div class="control">
        <input class="input" type="email" v-model.trim.lazy="email" />
      </div>
    </div>
    <div class="field">
      <label class="label has-text-primary">Société </label>
      <div class="control">
        <input class="input" />
      </div>
    </div>
    <div class="field">
      <label class="label has-text-primary">Message</label>
      <input
        class="textarea"
        type="textarea"
        minlength="10"
        maxlength="500"
        placeholder="Tapez votre message"
        v-model.trim.lazy="msg"
      />
    </div>
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox" />
          J'accepte que mes données soient sauvegardées par CEDEG Asbl sans
          utilisation extérieure
        </label>
      </div>
    </div>
    <br />
    <div class="field">
      <div class="control">
        <button
          @click="sendMail"
          :disabled="mailSended"
          class="button is-primary is-pulled-right"
        >
          <span v-if="!mailSended">Envoyer</span>
          <span v-else>Mail envoyé</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      msg: '',
      mailSended: false
    }
  },
  methods: {
    sendMail() {
      const sendMail = this.$fireFunc.httpsCallable('sendMail')
      sendMail({ name: this.name, email: this.email, msg: this.msg }).then(
        function(result) {}
      )
    }
  }
}
</script>
