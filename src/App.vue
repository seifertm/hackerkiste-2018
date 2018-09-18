<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide>
        <h1>Why does image optimization matter?</h1>
      </slide>
      <slide>
        <figure>
          <bar-chart width=800 height=400 :data="pageSize" :font-size=28.76></bar-chart>
          <figcaption>Page weight distribution on 2018-08-15 (data from <a href="https://www.httparchive.org/reports/page-weight">httparchive.org</a></figcaption>
        </figure>
      </slide>
      <slide>
        <p>Big pages are slower to load</p>
        <p>Users are more likely to bounce on slower pages <sup>1, 2</sup></p>
        <p v-if="parentWindow">Google experiment: increase to 30 search results => 0.5s longer load time => 20% decreased traffic</p>
        <footer>
          <ol>
            <li><a href="https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/">Daniel An (2018) – Find out how you stack up to new industry benchmarks for mobile page speed</a></li>
            <li><a href="https://blog.gigaspaces.com/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/">Nati Shalom (2008) - Amazon found every 100ms of latency cost them 1% in sales</a></li>
          </ol>
        </footer>
      </slide>
      <slide>
        <h1>Measure, don't guess!</h1>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/2018-09-18 webpagetest.org.png">
          </picture>
          <figcaption><a href="https://www.webpagetest.org/">webpagetest.org</a></figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/2018-09-18 PageSpeed Insights.png">
          </picture>
          <figcaption><a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a></figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/2018-09-18 - Lighthouse.png">
          </picture>
          <figcaption><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a></figcaption>
        </figure>
      </slide>
      <slide>
        <h1>Choosing a format</h1>
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
        <figure>
          <picture>
            <img src="./assets/2018-09-18 caniuse.com - jpeg xr.png">
          </picture>
          <figcaption>JPEG XR</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/2018-09-06 caniuse.com - heif.png">
          </picture>
          <figcaption>HEIF (1.1 MiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <h4>Other formats</h4>
        <p>BPG (Segfault)</p>
        <p>AVIF (Spec not finalized) <sup>1</sup></p>
        <p v-if="parentWindow">Designed to be conformant to HEIF</p>
        <p v-if="parentWindow">AV1 is supported in Chrome >=70 and Firefox Nightly.</p>
        <p v-if="parentWindow">=> AVIF support expected to come</p>
        <footer>
          <ol>
            <li><a href="https://aomediacodec.github.io/av1-avif/">Specification</a>, <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1443863">Firefox support</a></li>
          </ol>
        </footer>
      </slide>
      <slide>
        <p>Searching for that bug that no one else managed to find</p>
        <div class="side-by-side">
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
        </div>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/logo-hackerkiste-svgo.svg">
          </picture>
          <figcaption>SVG minified by <a href="https://github.com/svg/svgo">SVGO</a> (5.4 KiB -> 4.1 KiB 24.5%) (from https://2018.hackerkiste.de)</figcaption>
        </figure>
      </slide>
      <slide>
        <h1>Lazy loading of offscreen content</h1>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/above-the-fold.png">
          </picture>
          <figcaption>Above and below the fold content (from the <a href="http://www.newzapp.co.uk/blog/email-marketing/the-fold-and-email-marketing/">newzapp.co.uk</a>)</figcaption>
        </figure>
      </slide>
      <slide>
        <p>Use <a href="https://github.com/aFarkas/lazysizes">lazySizes</a> or a custom built solution based on the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"> Intersection Observer API</a></p>
      </slide>
      <slide>
        <h1>Increasing perceived performance</h1>
        <p>Create low-quality images from the actual image (e.g. by blurring)</p>
      </slide>
      <slide>
        <figure>
          <picture>
            <img src="./assets/skeleton-screen.png">
          </picture>
          <figcaption>Skeleton screen (from <a href="https://css-tricks.com/building-skeleton-screens-css-custom-properties/">CSS Tricks</a>)</figcaption>
        </figure>
      </slide>
      <slide>
        <p>Create SVG placeholders (e.g. using <a href="https://github.com/technopagan/sqip">SQIP</a>)</p>
        <div class="side-by-side">
          <figure>
            <picture>
              <img src="./assets/mona lisa.png">
            </picture>
            <figcaption>Reference image (from the <a href="https://github.com/fogleman/primitive">Primitive project page</a>)</figcaption>
          </figure>
          <figure>
            <picture>
              <img src="./assets/primitive.gif">
            </picture>
            <figcaption>Approximated SVG (from the <a href="https://github.com/fogleman/primitive">Primitive project page</a>)</figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <h1>Thank you!</h1>
        <h1>Questions?</h1>
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
.eg-slideshow {
  background-color: white;
}

.eg-slideshow h1 {
  font-size: 2.5em;
}

.eg-slide-content {
  position: relative;
  max-width: 80%;
  max-height: 100%;
  margin: 1em auto;
}

.eg-slide-content .side-by-side {
  display: flex;
}

.eg-slide-content .side-by-side > *{
  flex: 1;
}

.eg-slide-content figure {
  box-sizing: border-box;
  margin: 0;
}

.eg-slide-content figure picture {
  display: inline-block;
  position: relative;
}

.eg-slide-content figure picture img {
  max-width: 100%;
  height: auto;
}
</style>
