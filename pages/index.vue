<template>
  <span>
    <v-app-bar app height="60" elevate-on-scroll>
      <!-- <v-avatar class="mr-3" color="grey lighten-5" size="70">
        <v-img
          contain
          max-height="70%"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        ></v-img>
      </v-avatar>-->

      <v-toolbar-title class="font-weight-black headline"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$vuetify.goTo('#hero')" text>Start</v-btn>
      <v-btn @click="$vuetify.goTo('#about-me')" text>Profil</v-btn>
      <!-- <v-btn @click="$vuetify.goTo('#features')" text>Features</v-btn> -->
      <!-- <v-btn @click="$vuetify.goTo('#stats')" text>Stats</v-btn> -->
      <v-btn @click="$vuetify.goTo('#portfolio')" text>Portfolio</v-btn>
      <v-btn @click="$vuetify.goTo('#contact')" text>Kontakt</v-btn>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <section id="hero">
        <v-row no-gutters>
          <v-img
            max-height="1000"
            :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
            :src="require('~/assets/images/header_50.jpg')"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row align="center" class="white--text mx-auto" justify="center">
                  <v-col class="white--text text-center" cols="12" tag="h1">
                    <span
                      class="font-weight-light"
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    >{{pages.start.title}}</span>

                    <br />

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-1': 'display-4']"
                      class="font-weight-black"
                    >{{pages.start.subTitle}}</span>
                  </v-col>

                  <v-btn class="align-self-end" fab outlined @click="$vuetify.goTo('#about-me')">
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">{{pages.aboutme.title}}</h2>

          <v-responsive class="mx-auto mb-8" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-responsive class="mx-auto title font-weight-light mb-8" max-width="720">
            <div v-html="$md.render(pages.aboutme.intro)" />
            <p>{{pages.aboutme.image}}</p>
          </v-responsive>

          <v-avatar class="elevation-12 mb-12" size="256">
            <v-img :src="require('~/assets/images/antje.jpg')"></v-img>
          </v-avatar>

          <!-- <div></div> -->

          <!-- <v-btn color="grey" href="https://vuetifyjs.com" outlined large>
            <span class="grey--text text--darken-1 font-weight-bold">Vuetify Documentation</span>
          </v-btn>-->
        </v-container>

        <div class="py-12"></div>
      </section>
      <!--
      <section id="features" class="grey lighten-3">
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">VUETIFY FEATURES</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col v-for="({ icon, title, text }, i) in features" :key="i" cols="12" md="4">
              <v-card class="py-12 px-4" color="grey lighten-5" flat>
                <v-theme-provider dark>
                  <div>
                    <v-avatar color="primary" size="88">
                      <v-icon large v-text="icon"></v-icon>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                  class="justify-center font-weight-black text-uppercase"
                  v-text="title"
                ></v-card-title>

                <v-card-text class="subtitle-1" v-text="text"></v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>-->

      <!-- <section id="stats">
        <v-parallax
          :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
          src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        >
          <v-container fill-height>
            <v-row class="mx-auto">
              <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                <div class="text-center">
                  <div class="display-3 font-weight-black mb-4" v-text="value"></div>

                  <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>-->

      <section id="portfolio">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Portfolio</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col v-for="({ title, description }, i) in portfolioItems" :key="i" cols="12" md="4">
              <!-- <v-img :src="src" class="mb-4" height="275" max-width="100%"></v-img> -->

              <h3 class="font-weight-black mb-4 text-uppercase" v-text="title"></h3>

              <div class="title font-weight-light mb-5" v-text="description"></div>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <v-sheet id="contact" color="#333333" dark tag="section">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Kontakt</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
          </v-responsive>

          <form method="post" data-netlify="true" data-netlify-honeypot="bot-field" name="contact">
            <input type="hidden" name="form-name" value="contact" />
            <v-theme-provider light>
              <v-row>
                <v-col cols="12">
                  <v-text-field name="name" flat label="Name*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat name="email" label="Email*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-text-field flat name="subject" label="Betreff*" solo></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-textarea flat name="message" label="Nachricht*" solo></v-textarea>
                </v-col>

                <v-col class="mx-auto" cols="auto">
                  <v-btn type="submit" color="accent" x-large>Senden</v-btn>
                </v-col>
              </v-row>
            </v-theme-provider>
          </form>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-content>

    <!-- <v-footer class="justify-center" color="#292929" height="100">
      <div
        class="title font-weight-light grey--text text--lighten-1 text-center"
      >&copy; {{ (new Date()).getFullYear() }} — Vuetify, LLC — Made with 💜 by John Leider</div>
    </v-footer>-->

    <!-- <logo /> -->
    <!-- <h1 class="title">Nuxt.js & Netlify CMS Starter</h1>
    <h2 class="subtitle">Truly fantastic. Sometimes I astound even myself.</h2>
    <a href="https://github.com/xdesro/nuxt-netlify-cms-starter">GitHub</a>
    <a href="http://i.ncredibly.online">Twitter</a>
    <nuxt-link to="/blog">Blog</nuxt-link>
    <v-btn color="primary" icon>
      <v-icon>mdi-one-up</v-icon>
    </v-btn>
    <v-btn color="primary" text outlined @click="expand = !expand">Mehr</v-btn>-->

    <!-- <div class="deploy-button">
      <a
        href="https://app.netlify.com/start/deploy?repository=https://github.com/xdesro/nuxt-netlify-cms-starter"
      >
        <img src="https://www.netlify.com/img/deploy/button.svg" alt="Deploy to Netlify" />
      </a>
    </div>-->
  </span>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  },
  computed: {
    portfolioItems() {
      console.log('index::portfolioItems: this:', this)
      return this.$store.state.pages.portfolioItems
    },
    pages() {
      const temp = {}
      this.$store.state.pages.forEach(d => {
        temp[d.page] = d
      })
      console.log('index::pages: temp:', temp)
      console.log('index::pages: temp.aboutme.title:', temp.aboutme.title)
      return temp
    }
  },
  data() {
    return {
      // features: [
      //   {
      //     icon: 'mdi-account-group-outline',
      //     title: 'Vibrant Community',
      //     text:
      //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      //   },
      //   {
      //     icon: 'mdi-update',
      //     title: 'Frequent Updates',
      //     text:
      //       'Sed ut elementum justo. Suspendisse non justo enim. Vestibulum cursus mauris dui, a luctus ex blandit. Lorem ipsum dolor sit amet consectetur adipisicing elit. qui ipsum eveniet facilis obcaecati corrupti consectetur adipisicing elit.'
      //   },
      //   {
      //     icon: 'mdi-shield-outline',
      //     title: 'Long-term Support',
      //     text:
      //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'
      //   }
      // ],
      stats: [
        ['24k', 'Github Stars'],
        ['330+', 'Releases'],
        ['1m', 'Downloads/mo'],
        ['5m', 'Total Downloads']
      ]
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: bold;
  font-size: 3.2rem;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
a {
  font-weight: bold;
  color: #526488;
}
.deploy-button {
  margin-top: 1rem;
} */
</style>
