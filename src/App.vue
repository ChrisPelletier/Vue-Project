<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <b-navbar-brand href="#">
        Weather App
      </b-navbar-brand>
    </b-navbar>
    <b-container fluid>
      <b-row>
        <b-col />
        <b-col cols="10">
          <div class="full-width center-content">
            <hello-component name="Chris" />
          </div>
        </b-col>
        <b-col />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent/HelloComponent.vue'
export default {
    components: {
        HelloComponent
    }
}
</script>
