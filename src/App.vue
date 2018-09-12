<template>
  <div id="app" class="eg-theme-gourmet">
    <div class="eg-slideshow">
      <slide>
        <h3>Why does image optimization matter?</h3>
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
    </div>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'

export default {
  name: 'app',
  mixins: [Slideshow],
  props: {
    mouseNavigation: {default: false}
  }
}
</script>

<style>
</style>
