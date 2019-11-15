<template>
  <div id="app">
    <h1>Font Awesome Icons:</h1>
    <h1>Icon sizing</h1>
    <font-awesome-icon icon="wrench" size="xs" />
    <font-awesome-icon icon="coffee" size="lg" />
    <font-awesome-icon icon="spinner" size="4x" />
    <font-awesome-icon :icon="['fab', 'vuejs']" size="8x" />
    <font-awesome-icon :icon="['far', 'angry']" size="8x" />

    <h1>Rotation</h1>

    <font-awesome-icon icon="spinner" rotation="90" />
    <font-awesome-icon icon="spinner" rotation="180" size="lg" />
    <font-awesome-icon icon="spinner" rotation="270" size="2x" />
    <font-awesome-icon :icon="['fab', 'vuejs']" rotation="270" size="4x" />

    <h1>Flips</h1>

    <font-awesome-icon icon="ambulance" flip="horizontal" size="lg" />
    <font-awesome-icon icon="ambulance" flip="vertical" size="lg" />
    <font-awesome-icon icon="ambulance" flip="both" size="lg" />
    <font-awesome-icon :icon="['fab', 'vuejs']" flip="vertical" size="4x" />

    <h1>Animation</h1>

    <font-awesome-icon icon="spinner" spin />
    <font-awesome-icon icon="spinner" pulse />
    <font-awesome-icon :icon="['fab', 'vuejs']" size="lg" spin />
    <font-awesome-icon :icon="['fab', 'vuejs']" size="lg" pulse />

    <h1>Border</h1>

    <font-awesome-icon icon="spinner" border size="lg" />
    <font-awesome-icon icon="ambulance" flip="vertical" border size="lg" />

    <h1>Pull left/right</h1>

    <font-awesome-icon icon="spinner" pull="left" />
    <font-awesome-icon icon="spinner" pull="right" />
    <font-awesome-icon icon="ambulance" flip="vertical" pull="right" border size="lg" />

    <h1 style="clear: both">Power transforms</h1>

    <font-awesome-icon icon="spinner" transform="shrink-6 left-4" />
    <font-awesome-icon icon="ambulance" size="lg" :transform="{ rotate: 42 }" />

    <h1>Masking</h1>

    <font-awesome-icon icon="pencil-alt" transform="shrink-10 up-.5" style="background:MistyRose" size="4x" />

    <font-awesome-icon
      icon="pencil-alt"
      transform="shrink-10 up-.5"
      mask="comment"
      style="background:MistyRose"
      size="4x"
    />

    <font-awesome-icon
      :icon="['fab', 'facebook-f']"
      transform="shrink-3.5 down-1.6 right-1.25"
      style="background:MistyRose"
      size="4x"
    />

    <font-awesome-icon
      :icon="['fab', 'facebook-f']"
      transform="shrink-3.5 down-1.6 right-1.25"
      mask="circle"
      style="background:MistyRose"
      size="4x"
    />

    <font-awesome-icon icon="headphones" transform="shrink-6" style="background:MistyRose" size="4x" />

    <font-awesome-icon icon="headphones" transform="shrink-6" mask="square" style="background:MistyRose" size="4x" />

    <h1>Layers</h1>

    <font-awesome-layers class="fa-4x">
      <font-awesome-icon icon="circle" />
      <font-awesome-icon icon="check" transform="shrink-6" style="color: white;" />
    </font-awesome-layers>

    <font-awesome-layers class="fa-4x" style="background:MistyRose">
      <font-awesome-icon icon="circle" style="color:Tomato" />
      <font-awesome-icon icon="times" class="fa-inverse" transform="shrink-6" />
    </font-awesome-layers>

    <font-awesome-layers class="fa-4x" style="background:MistyRose">
      <font-awesome-icon icon="bookmark" />
      <font-awesome-icon icon="heart" class="fa-inverse" transform="shrink-10 up-2" style="color:Tomato" />
    </font-awesome-layers>

    <font-awesome-layers class="fa-4x" style="background:MistyRose">
      <font-awesome-icon icon="play" transform="rotate--90 grow-2" />
      <font-awesome-icon icon="sun" class="fa-inverse" transform="shrink-10 up-2" />
      <font-awesome-icon icon="moon" class="fa-inverse" transform="shrink-11 down-4.2 left-4" />
      <font-awesome-icon icon="star" class="fa-inverse" transform="shrink-11 down-4.2 right-4" />
    </font-awesome-layers>

    <h1>Layers text</h1>

    <font-awesome-layers full-width class="fa-4x" style="background:MistyRose">
      <font-awesome-icon icon="calendar" />
      <font-awesome-layers-text class="fa-inverse" transform="shrink-8 down-3" value="27" style="font-weight:900" />
    </font-awesome-layers>

    <font-awesome-layers full-width class="fa-4x" style="background:MistyRose">
      <font-awesome-icon icon="certificate" />
      <font-awesome-layers-text
        class="fa-inverse"
        transform="shrink-11.5 rotate--30"
        value="NEW"
        style="font-weight:900"
      />
    </font-awesome-layers>

    <font-awesome-layers full-width class="fa-4x" style="background:MistyRose">
      <font-awesome-icon icon="envelope" />
      <span class="fa-layers-counter" style="background:Tomato">1,419</span>
    </font-awesome-layers>

    <p>
      Drink: {{ drink }}
      <font-awesome-icon icon="coffee" size="4x" v-if="drink == 'Coffee'" />
      <font-awesome-icon icon="cocktail" size="4x" v-if="drink == 'Cocktail'" />
      <font-awesome-icon icon="glass-martini" size="4x" v-if="drink == 'Martini'" />
      <font-awesome-icon icon="beer" size="4x" v-if="drink == 'Beer'" />
    </p>
    <p>
      <button @click="drink = 'Coffee'">
        <font-awesome-icon icon="coffee" size="4x" />
      </button>
      <button @click="drink = 'Cocktail'">
        <font-awesome-icon icon="cocktail" size="4x" />
      </button>
      <button @click="drink = 'Martini'">
        <font-awesome-icon icon="glass-martini" size="4x" />
      </button>
      <button @click="drink = 'Beer'">
        <font-awesome-icon icon="beer" size="4x" />
      </button>
    </p>
    <p>
      Language: {{ language }}
      <font-awesome-icon :icon="['fab', 'js']" size="4x" v-if="language == 'JavaScript'" />
      <font-awesome-icon :icon="['fab', 'vuejs']" size="4x" v-if="language == 'Vue.js'" />
      <font-awesome-icon :icon="['fab', 'java']" size="4x" v-if="language == 'Java'" />
      <font-awesome-icon :icon="['fab', 'php']" size="4x" v-if="language == 'PHP'" />
      <font-awesome-icon :icon="['fab', 'python']" size="4x" v-if="language == 'Python'" />
      <font-awesome-icon :icon="['fab', 'css3']" size="4x" v-if="language == 'CSS 3'" />
      <font-awesome-icon :icon="['fab', 'html5']" size="4x" v-if="language == 'HTML 5'" />
    </p>
    <p>
      <button @click="language = 'JavaScript'">
        <font-awesome-icon :icon="['fab', 'js']" size="4x" />
      </button>
      <button @click="language = 'Vue.js'">
        <font-awesome-icon :icon="['fab', 'vuejs']" size="4x" />
      </button>
      <button @click="language = 'Java'">
        <font-awesome-icon :icon="['fab', 'java']" size="4x" />
      </button>
      <button @click="language = 'PHP'">
        <font-awesome-icon :icon="['fab', 'php']" size="4x" />
      </button>
      <button @click="language = 'Python'">
        <font-awesome-icon :icon="['fab', 'python']" size="4x" />
      </button>
      <button @click="language = 'CSS 3'">
        <font-awesome-icon :icon="['fab', 'css3']" size="4x" />
      </button>
      <button @click="language = 'HTML 5'">
        <font-awesome-icon :icon="['fab', 'html5']" size="4x" />
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class FontAwesomeIcons extends Vue {
  private drink: string = "";
  private language: string = "";
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: blue;
}
</style>
