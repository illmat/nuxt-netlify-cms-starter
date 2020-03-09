<template>
  <span>
    <v-app-bar app height="60" elevate-on-scroll>
      <v-toolbar-title class="font-weight-black headline"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$vuetify.goTo('#hero')" text>Start</v-btn>
      <v-btn @click="$vuetify.goTo('#about-me')" text>Profil</v-btn>
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
            :src="pages.start.image"
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
            <v-img :src="pages.aboutme.image"></v-img>
          </v-avatar>

          <!-- <div></div> -->

          <!-- <v-btn color="grey" href="https://vuetifyjs.com" outlined large>
            <span class="grey--text text--darken-1 font-weight-bold">Vuetify Documentation</span>
          </v-btn>-->
        </v-container>

        <div class="py-12"></div>
      </section>
      <section id="portfolio">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Portfolio</h2>

          <v-responsive class="mx-auto mb-12" width="56">
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ title, description, image, page }, i) in portfolioItems"
              :key="i"
              cols="12"
              md="4"
              lg="3"
            >
              <v-dialog v-model="dialogs[i]" max-width="800px">
                <v-card>
                  <v-img contain :src="image" max-height="600px"></v-img>
                  <v-card-title class="headline">{{title}}</v-card-title>

                  <v-card-text>{{description}}</v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialogs[i] = false">Schließen</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-card class="fill-height" hover outlined @click="dialogs[i] = true">
                <v-img height="220px" :src="image"></v-img>
                <v-card-title>{{title}}</v-card-title>
                <v-card-text>{{description}}</v-card-text>
              </v-card>
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
      console.log(
        'index::paktest: this.$store.state.pages.portfolioItems:',
        this.$store.state.portfolioItems
      )
      return this.$store.state.portfolioItems
    },
    pages() {
      const temp = {}
      this.$store.state.pages.forEach(d => {
        temp[d.page] = d
      })
      return temp
    }
  },
  data() {
    const dialogs = {}
    for (let i = 0; i < this.$store.state.portfolioItems.length; i++) {
      dialogs[i] = false
    }
    return {
      dialogs
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
</style>
