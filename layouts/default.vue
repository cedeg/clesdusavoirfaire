<template>
  <div>
    <div class="hero-head">
      <nav class="navbar is-fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="http://www.clesdusavoirfaire.be">
              <img src="~/assets/cedeg.jpg" height="75px" />
            </a>
            <span class="navbar-burger burger" data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" class="navbar-menu">
            <div class="navbar-end">
              <nuxt-link to="/" class="navbar-item is-active">
                Accueil
              </nuxt-link>
              <nuxt-link to="/exposants" class="navbar-item">
                Les exposants
              </nuxt-link>
              <!--<a class="navbar-item">Nos sponsors</a>-->
              <nuxt-link to="/partenaires" class="navbar-item">
                Nos partenaires
              </nuxt-link>
              <span class="navbar-item">
                <nuxt-link to="/contact" class="button is-primary is-inverted">
                  <span class="icon">
                    <i class="fab fa-envelope"></i>
                  </span>
                  <span>Contact</span>
                </nuxt-link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <!-- Hero content: will be in the middle -->
    <section class="hero is-large hero-cles">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title"></h1>
          <h2 class="subtitle"></h2>
        </div>
      </div>
    </section>
    <section class="main-content columns">
      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Les clés du savoir-faire</strong>, une organisation de la
          <a href="http://www.cedeg.be">CEDEG Asbl</a>.
        </p>
        <div class="columns is-centered">
          <div class="column is-2">
            <p class="has-text-primary">
              <b-icon pack="fas" icon="phone" size="is-small"></b-icon>
              <a href="tel:+3281613374">081/61.33.74</a>
            </p>
          </div>
          <div class="column is-2">
            <p class="has-text-primary">
              <b-icon pack="fas" icon="envelope" size="is-small"></b-icon>
              <a href="mailto:infos@clesdusavoirfaire.be">
                infos@clesdusavoirfaire.be
              </a>
            </p>
          </div>
          <div class="column is-2">
            <p class="has-text-primary">
              <b-icon pack="fas" icon="facebook" size="is-small"></b-icon>
              <a href="https://fb.me/clesdusavoirfaire">
                Les clés du savoir-faire
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        thresholds: [0]
      }
    }
  },
  methods: {}
}
</script>
