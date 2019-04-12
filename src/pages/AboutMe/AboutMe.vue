<template>
  <b-container fluid>
    <b-row>
      <b-col md="4" class="aboutMeColumn">
        <b-card title="About Me">
          <b-img src="/static/img/profile-image.jpg" fluid rounded="circle" alt="Profile Image"></b-img>
          <hello-component />
        </b-card>
      </b-col>
      <b-col md="8" class="aboutMeColumn">
        <b-card title="Information">
          <p>Some interesting info about me</p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HelloComponent from '../../components/HelloComponent/HelloComponent.vue'
import './index.scss'
export default {
    components: { HelloComponent }
}
</script>
