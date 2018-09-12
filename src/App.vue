<template>
  <div id="app" class="eg-theme-gourmet">
    <div class="eg-slideshow">
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
        <p>Second slide</p>
      </slide>
    </div>
  </div>
</template>

<script>
import { Slideshow } from 'eagle.js'

export default {
  name: 'app',
  mixins: [Slideshow]
}
</script>

<style>
</style>
