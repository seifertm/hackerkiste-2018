<template>
  <div id="app">
    <div class="eg-slideshow">
      <slide>
        <h1>Jetzt aber schnell!</h1>
        <h2>Bildoptimierung für das Web</h2>
        <small>Michael Seifert - 2018-09-28</small>
      </slide>
      <slide>
        <figure>
          <bar-chart width=800 height=400 :data="pageSize" :font-size=28.76></bar-chart>
          <figcaption><a href="https://www.httparchive.org/reports/page-weight">Page weight distribution on 2018-08-15</a></figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/mobile-page-speed-bounce-1280.jpeg">
          <figcaption><a href="https://www.thinkwithgoogle.com/marketing-resources/data-measurement/mobile-page-speed-new-industry-benchmarks/">Daniel An (2018) – Find out how you stack up to new industry benchmarks for mobile page speed</a></figcaption>
        </figure>
        <p v-if="parentWindow">Google experiment: increase to 30 search results => 0.5s longer load time => 20% decreased traffic</p>
        <p>Users are more likely to bounce on slower pages <sup>1, 2</sup></p>
        <footer>
          <ol>
            <li><a href="https://blog.gigaspaces.com/amazon-found-every-100ms-of-latency-cost-them-1-in-sales/">Nati Shalom (2008) - Amazon found every 100ms of latency cost them 1% in sales</a></li>
          </ol>
        </footer>
      </slide>
      <slide>
        <h1>Choosing the right quality</h1>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q100.jpeg">
          <figcaption>JPEG with quality 100 (949 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q85.jpeg">
          <figcaption>JPEG with quality 85 (161 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q70.jpeg">
          <figcaption>JPEG with quality 70 (107 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q55.jpeg">
          <figcaption>JPEG with quality 55 (82 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q40.jpeg">
          <figcaption>JPEG with quality 40 (65 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q25.jpeg">
          <figcaption>JPEG with quality 25 (46 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q10.jpeg">
          <figcaption>JPEG with quality 10 (22 KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <p>Numerous metrics to assess image similarity:</p>
        <ul>
          <li>Structural similarity (SSIM)</li>
          <li>Peak Signal-to-Noise Ratio (PSNRHVS-M)</li>
          <li><a href="https://github.com/google/butteraugli">Butteraugli</a></li>
          <li>…</li>
        </ul>
      </slide>
      <slide>
        <p>Encoding images based on a target metric</p>
        <ul>
          <li><a href="https://github.com/technopagan/cjpeg-dssim">cjpeg-dssim</a> (SSIM)</li>
          <li><a href="https://github.com/mozilla/mozjpeg">Mozjpeg</a> (PSNRHVS-M)</li>
          <li><a href="https://github.com/google/guetzli">Guetzli</a> (Butteraugli)</li>
        </ul>
      </slide>
      <slide>
        <h1>Choosing a format</h1>
      </slide>
      <slide>
        <h2>JPEG XR</h2>
        <p>Generally better performance than JPEG <sup>1</sup></p>
        <footer>
          <ol>
            <li>Simone et al. (2009) - Subjective evaluation of JPEG XR image compression</li>
          </ol>
        </footer>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-26 caniuse.com - jpeg xr-1280.jpeg">
          <figcaption>JPEG XR browser support</figcaption>
        </figure>
      </slide>
      <slide>
        <h2>JPEG 2000</h2>
        <p>Better compression performance than JPEG and JPEG XR <sup>1</sup></p>
        <p>Patent encumbered</p>
        <footer>
          <ol>
            <li>Simone et al. (2009) - Subjective evaluation of JPEG XR image compression</li>
          </ol>
        </footer>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-26 caniuse.com - jpeg2000-1280.jpeg">
          <figcaption>JPEG 2000 browser support</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/webp vs jpeg - kodak.png">
          <figcaption>Perfomance of lossy WebP (blue) vs JPEG (red) compression <a href="https://developers.google.com/speed/webp/docs/webp_study">(WebP Compression Study)</a></figcaption>
        </figure>
        <p>WebP produces images that are 25&hairsp;% – 34&hairsp;% smaller</p>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-20 caniuse.com - webp-1280.jpeg">
          <figcaption>WebP browser support</figcaption>
        </figure>
      </slide>
      <slide>
        <h2>High Efficiency Image Format (HEIF) and Better Portable Graphics (BPG)</h2>
        <p>Based on HEVC intra-frame coding</p>
        <p>Produces files that are <a href="https://nokiatech.github.io/heif/technical.html#table-4">approx. 28% smaller</a> than JPEG and generally <a href="https://web.archive.org/web/20160928024026/http://people.mozilla.org/~josh/lossy_compressed_image_study_july_2014/">smaller than WebP</a></p>
        <p>Patent encumbered</p>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-06 caniuse.com - heif.png">
          <figcaption>HEIF browser support</figcaption>
        </figure>
      </slide>
      <slide>
        <h2>AV1 Image Format (AVIF)</h2>
        <p>Based on AV1 intra-frame coding</p>
        <p>Same container format as HEIF</p>
        <p><a href="https://aomediacodec.github.io/av1-avif/">Specification</a> not finalized</p>
        <p v-if="parentWindow">Designed to be conformant to HEIF</p>
        <p v-if="parentWindow">AV1 is supported in Chrome >=70 and Firefox Nightly.</p>
        <p v-if="parentWindow">=> AVIF support expected to come</p>
      </slide>
      <slide :steps=2>
        <h4>"Searching for that bug that no one else managed to find"</h4>
        <div class="side-by-side">
          <figure>
            <img src="./assets/dog.gif">
            <figcaption><a href="http://devopsreactions.tumblr.com">Original GIF</a> (780 KiB)</figcaption>
          </figure>
          <figure v-if="step >= 2">
            <video autoplay loop><source src="./assets/dog.mp4" type="video/mp4"></video>
            <figcaption>MP4 Video (57 KiB)</figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-26 caniuse.com - mp4-1280.jpeg">
          <figcaption>H.264 in MP4 container browser support</figcaption>
        </figure>
      </slide>
      <slide :steps=2>
        <div class="side-by-side">
          <figure>
            <img style="background-color: black; padding: 1em; margin: 0 1em;" src="./assets/logo-hackerkiste.svg">
            <figcaption><a href="https://2018.hackerkiste.de">Original SVG</a> (5.4 KiB)</figcaption>
          </figure>
          <figure v-if="step >= 2">
            <img style="background-color: black; padding: 1em; margin: 0 1em;" src="./assets/logo-hackerkiste-svgo.svg">
            <figcaption>SVG minified by <a href="https://github.com/svg/svgo">SVGO</a> (4.1 KiB; 24.5% smaller)</figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <h1>Lazy loading of offscreen content</h1>
      </slide>
      <slide>
        <figure>
          <img src="./assets/above-the-fold-1280.jpeg">
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
          <img src="./assets/skeleton-screen-1280.jpeg">
          <figcaption>Skeleton screen (from <a href="https://css-tricks.com/building-skeleton-screens-css-custom-properties/">CSS Tricks</a>)</figcaption>
        </figure>
      </slide>
      <slide :steps=2>
        <p>Create SVG placeholders (e.g. using <a href="https://github.com/technopagan/sqip">SQIP</a>)</p>
        <div class="side-by-side">
          <figure>
            <img src="./assets/mona lisa-1280.jpeg">
            <figcaption><a href="https://github.com/fogleman/primitive">Reference image</a></figcaption>
          </figure>
          <figure v-if="step >= 2">
            <video autoplay loop><source src="./assets/primitive.mp4"></video>
            <figcaption>Approximated SVG using <a href="https://github.com/fogleman/primitive">Primitive</a></figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <h1>Measure, don't guess!</h1>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-18 webpagetest.org-1280.jpeg">
          <figcaption><a href="https://www.webpagetest.org/">webpagetest.org</a></figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-18 PageSpeed Insights-1280.jpeg">
          <figcaption><a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insights</a></figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-18 - Lighthouse-1280.jpeg">
          <figcaption><a href="https://developers.google.com/web/tools/lighthouse/">Lighthouse</a></figcaption>
        </figure>
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
  background-color: white !important;
}

@media (min-width: 1280px) {
  .eg-slideshow .eg-slide .eg-slide-content {
    width: 1280px !important;
  }
}
@media (min-width: 1920px) {
  .eg-slideshow .eg-slide .eg-slide-content {
    width: 1920px !important;
  }
}

.eg-slideshow h1 {
  font-size: 2.5em;
}

h4 {
  text-align: center;
}

.eg-slide-content {
  position: relative;
  max-height: 100%;
  margin: 1em auto;
}

.eg-slide-content .side-by-side {
  display: flex;
}

.eg-slide-content .side-by-side > * {
  flex: initial;
  margin: 0;
  width: 50%;
}

.eg-slide-content figure {
  box-sizing: border-box;
  margin: 0;
}

.eg-slide-content figure :not(figcaption) {
  max-width: 100%;
  height: auto;
  margin: 0 auto;
  display: block;
}

.eg-slide-content figure figcaption {
  text-align: center;
}

small {
  display: block;
  text-align: center;
}

</style>
