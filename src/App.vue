<template>
  <div id="app" class="eg-theme-gourmet">
    <div class="eg-slideshow">
      <slide>
        <h3>Why does image optimization matter?</h3>
        <bar-chart width=800 height=400 :data="pageSize" font-size=28.76></bar-chart>
        <p>Delays cause rendering delays -> users bounce</p>
        <p>A significant amount of website content consists of images</p>
      </slide>
      <slide>
        <h3>Measure, don't guess</h3>
        <p>webpagetest.org</p>
        <p>httparchive.org</p>
        <p>Lighthouse<p>
        <p>PageSpeed Insights</p>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/antilope.png">
          </picture>
          <figcaption>PNG (15.6 MiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/antilope-cjpeg.jpeg">
          </picture>
          <figcaption>JPEG (1.3 MiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/antilope.webp">
          </picture>
          <figcaption>WebP (672 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <p>HEIF (1.1 MiB)</p>
        <p>BPG (Segfault)</p>
      </slide>
      <slide>
        <p>Searching for that bug that no one else managed to find</p>
        <figure>
          <picture>
            <img src="./assets/dog.gif">
          </picture>
          <figcaption>GIF (780 KiB) (by uaiHebert on http://devopsreactions.tumblr.com)</figcaption>
        </figure>
        <figure>
          <video autoplay loop><source src="./assets/dog.mp4" type="video/mp4"></video>
          <figcaption>MP4 (57 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <p>Use image placeholders</p>
        <ul>
          <li>Create low-quality images from the actual image (e.g. by blurring)</li>
          <li>Create SVG placeholders from the original image (e.g. https://github.com/technopagan/sqip)</li>
          <li>Create a "skeleton screen" using colored or grey placeholders</li>
        </ul>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'

import BarChart from './components/BarChart.vue'

export default {
  name: 'app',
  components: {BarChart},
  mixins: [Slideshow],
  props: {
    mouseNavigation: {default: false}
  },
  data: function() {
    return {
      baseUrl: process.env.BASE_URL,
      pageSize: [
        {label: "html", value: 28.5},
        {label: "css", value: 50.0},
        {label: "fonts", value: 96.9},
        {label: "javascript", value: 403.3},
        {label: "images", value: 653.1},
      ]
    }
  }
}
</script>

<style>
</style>
