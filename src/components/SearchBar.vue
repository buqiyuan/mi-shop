<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-toolbar color="white" flat>
            <v-btn icon light>
              <v-icon color="grey darken-2">arrow_back</v-icon>
            </v-btn>

              <v-toolbar-title class="grey--text text--darken-4">
                <slot name="title"></slot>
              </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon light>
              <v-icon color="grey darken-2">search</v-icon>
            </v-btn>
          </v-toolbar>

        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  export default {
    name: "SearchBar"
  }
</script>

<style lang="scss" scoped>
  .v-toolbar {
    position: fixed;
    z-index: 999999;
    background: #f2f2f2!important;
    .v-toolbar__title{
      position: absolute;
      left: 50%;
      top: 50%;
      font-size: .3rem;
      margin-left: 0;
      transform: translate(-50%, -50%);
    }
  }
</style>
