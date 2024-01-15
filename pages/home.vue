<template>
      <b-container class="mt-5">
      <b-row>
        <b-col cols="12" md="8" class="text-center mx-auto">
          <h1 class="mb-3">Welcome to Portugal!</h1>
          <p class="lead">Whether you're visiting or moving here, we have all the information you need to make the most of your time in Portugal.</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="8" class="mx-auto">
          <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
          >
            <b-carousel-slide
              caption="Tourist Destinations"
              text="Discover the most popular tourist destinations in Portugal, from the historic streets of Lisbon to the beautiful beaches of the Algarve."
              img-src="https://source.unsplash.com/random/1024x480?sig=1"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Local Customs"
              text="Learn about local customs and traditions, from the famous Fado music to the delicious Pastel de Nata."
              img-src="https://source.unsplash.com/random/1024x480?sig=2"
            ></b-carousel-slide>
            <b-carousel-slide
              caption="Moving to Portugal"
              text="Get tips and advice for moving to Portugal, from finding a place to live to navigating the healthcare system."
              img-src="https://source.unsplash.com/random/1024x480?sig=3"
            ></b-carousel-slide>
          </b-carousel>
        </b-col>
      </b-row>
    </b-container>
</template>
  
<script setup>
import { reactive } from 'vue';


</script>
  