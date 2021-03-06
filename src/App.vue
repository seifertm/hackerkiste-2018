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
        <figure>
          <bar-chart :width=1280 :height=400 :data="pageSize" :font-size=28.76></bar-chart>
          <figcaption><a href="https://www.httparchive.org/reports/page-weight">Page weight distribution on 2018-08-15</a></figcaption>
        </figure>
      </slide>
      <slide>
        <h1>Choosing the right quality</h1>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q100.jpeg">
          <figcaption>JPEG with quality 100 (949&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q85.jpeg">
          <figcaption>JPEG with quality 85 (161&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q70.jpeg">
          <figcaption>JPEG with quality 70 (107&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q55.jpeg">
          <figcaption>JPEG with quality 55 (82&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q40.jpeg">
          <figcaption>JPEG with quality 40 (65&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q25.jpeg">
          <figcaption>JPEG with quality 25 (46&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/antilope-1280x720-q10.jpeg">
          <figcaption>JPEG with quality 10 (22&thinsp;KiB)</figcaption>
        </figure>
      </slide>
      <slide>
        <h2>Image quality metrics</h2>
        <ul>
          <li>Structural similarity (SSIM)</li>
          <li>Peak Signal-to-Noise Ratio (PSNRHVS-M)</li>
          <li><a href="https://github.com/google/butteraugli">Butteraugli</a></li>
          <li>…</li>
        </ul>
      </slide>
      <slide>
        <h2>Image encoders targeting a specific metric</h2>
        <ul>
          <li><a href="https://github.com/technopagan/cjpeg-dssim">cjpeg-dssim</a> (SSIM)</li>
          <li><a href="https://github.com/mozilla/mozjpeg">Mozjpeg</a> (PSNRHVS-M)</li>
          <li><a href="https://github.com/google/guetzli">Guetzli</a> (Butteraugli)</li>
        </ul>
      </slide>
      <slide>
        <h1>Choosing a raster format</h1>
      </slide>
      <slide>
        <figure>
          <a href="https://jpeg.org/jpegxr/"><img style="max-height: 600px;" src="./assets/jpegxr-logo-svgo.svg"></a>
          <figcaption>Generally performs better than JPEG <sup>1</sup></figcaption>
        </figure>
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
        <figure>
          <a href="https://jpeg.org/jpeg2000/index.html"><img style="max-height: 600px;" src="./assets/jpeg2000-logo-svgo.svg"></a>
          <figcaption>Better compression performance than JPEG and JPEG XR <sup>1</sup></figcaption>
        </figure>
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
          <a href="https://developers.google.com/speed/webp/"><img src="./assets/webplogo-640.jpeg"></a>
        </figure>
        <figure>
          <a href="https://developers.google.com/speed/webp/docs/webp_study"><img src="./assets/webp vs jpeg - kodak.png"></a>
          <figcaption>Perfomance comparison of lossy WebP (blue) vs lossy JPEG (red) compression.<br/> WebP produces images that are 25&hairsp;% – 34&hairsp;% smaller</figcaption>
        </figure>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-20 caniuse.com - webp-1280.jpeg">
          <figcaption>WebP browser support</figcaption>
        </figure>
      </slide>
      <slide>
        <h2>High Efficiency Image Format (HEIF), <br/>Better Portable Graphics (BPG)</h2>
        <p>Based on HEVC intra-frame coding</p>
        <p>Produces files that are <a href="https://nokiatech.github.io/heif/technical.html#table-4">approx. 28% smaller</a> than JPEG and generally <a href="https://web.archive.org/web/20160928024026/http://people.mozilla.org/~josh/lossy_compressed_image_study_july_2014/">smaller than WebP</a></p>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-27 caniuse.com - heif-1280.jpeg">
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
      <slide :steps=4>
        <h2>Which format should I use?</h2>
        <p v-if="step >= 2">Use different raster formats for different browser clients</p>
        <p v-if="step >= 3">Generally prefer newer over older formats, if supported</p>
        <p v-if="step >= 4">AV1 is being broadly adopted in the industry. AVIF has a good chance to receive the same attention.</p>
      </slide>
      <slide :steps=2>
        <h2>Don't use GIFs</h2>
        <h4><q>Searching for that bug that no one else managed to find</q></h4>
        <div class="side-by-side">
          <figure>
            <img src="./assets/dog.gif">
            <figcaption><a href="http://devopsreactions.tumblr.com">Original GIF</a> (780&thinsp;KiB)</figcaption>
          </figure>
          <figure v-if="step >= 2">
            <video autoplay loop><source src="./assets/dog.mp4" type="video/mp4"></video>
            <figcaption>MP4 Video (57&thinsp;KiB)</figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <figure>
          <img src="./assets/2018-09-27 caniuse.com - mp4-1280.jpeg">
          <figcaption>H.264 in MP4 container browser support</figcaption>
        </figure>
      </slide>
      <slide>
        <h2>Vector formats (SVG)</h2>
        <p>Resolution scales indefinitely</p>
        <p>Supports animation and interactivity</p>
        <p>Use whenever possible!</p>
      </slide>
      <slide :steps=2>
        <h2>Optimize SVGs</h2>
        <div class="side-by-side">
          <figure>
            <img style="background-color: black; padding: 1em; margin: 0 1em;" src="./assets/logo-hackerkiste.svg">
            <figcaption><a href="https://2018.hackerkiste.de">Original SVG</a> (5.4&thinsp;KiB)</figcaption>
          </figure>
          <figure v-if="step >= 2">
            <img style="background-color: black; padding: 1em; margin: 0 1em;" src="./assets/logo-hackerkiste-svgo.svg">
            <figcaption>SVG minified by <a href="https://github.com/svg/svgo">SVGO</a> (4.1&thinsp;KiB; 24.5&hairsp;% smaller)</figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <h2>Different image sizes for responsive layouts</h2>
        <eg-code-block lang="html">&lt;img srcset="mobile.jpg   480w,
               tablet.jpg   720w,
               desktop.jpg 1080w"&gt;
        </eg-code-block>
      </slide>
      <slide>
        <figure>
          <a href="http://www.newzapp.co.uk/blog/email-marketing/the-fold-and-email-marketing/"><img src="./assets/above-the-fold-1280.jpeg"></a>
          <figcaption>Above and below the fold content</figcaption>
        </figure>
      </slide>
      <slide :steps=2>
        <h1>Lazy loading with <a href="https://github.com/aFarkas/lazysizes">lazySizes</a></h1>
        <eg-code-block lang="html">&lt;img data-src="image.jpg" class="lazyload" /&gt;</eg-code-block>
        <eg-code-block lang="html" v-if="step >= 2">&lt;img data-srcset="mobile.jpg   480w,
                    tablet.jpg   720w,
                    desktop.jpg 1080w"
       class="lazyload"&gt;
        </eg-code-block>
      </slide>
      <slide>
        <h1>Perceived performance</h1>
      </slide>
      <slide>
        <h2>Skeleton screens</h2>
        <figure>
          <img src="./assets/skeleton-screen-1280.jpeg">
          <figcaption><a href="https://css-tricks.com/building-skeleton-screens-css-custom-properties/">Skeleton screen</a> using grey areas for objects that are not loaded yet</figcaption>
        </figure>
      </slide>
      <slide :steps=2>
        <h2>Low-quality image placeholders</h2>
        <div class="side-by-side">
          <figure>
            <img src="./assets/mona-lisa-640.jpeg">
            <figcaption><a href="https://github.com/technopagan/sqip">Reference image (54&thinsp;KiB)</a></figcaption>
          </figure>
          <figure v-if="step >= 2">
            <img style="width: inherit;" src="./assets/mona-lisa-lqip.jpg">
            <figcaption>Low-resolution placeholder (442&thinsp;B)</figcaption>
          </figure>
        </div>
      </slide>
      <slide :steps=2>
        <h2>SVG image placeholders</h2>
        <div class="side-by-side">
          <figure>
            <img src="./assets/mona-lisa-640.jpeg">
            <figcaption><a href="https://github.com/technopagan/sqip">Reference image (54&thinsp;KiB)</a></figcaption>
          </figure>
          <figure v-if="step >= 2">
            <img style="width: inherit;" src="./assets/mona-lisa-640.svg">
            <figcaption>SVG placeholder (936&thinsp;B, 440&thinsp;B w/ Brotli)</figcaption>
          </figure>
        </div>
      </slide>
      <slide :steps=2>
        <h2>Creating SVG placeholders using <a href="https://github.com/technopagan/sqip">SQIP</a></h2>
        <div class="side-by-side">
          <figure>
            <img src="./assets/mona lisa-1280.jpeg">
            <figcaption><a href="https://github.com/fogleman/primitive">Reference image</a></figcaption>
          </figure>
          <figure v-if="step >= 2">
            <video autoplay><source src="./assets/primitive.mp4"></video>
            <figcaption>Approximated SVG using <a href="https://github.com/fogleman/primitive">Primitive</a></figcaption>
          </figure>
        </div>
      </slide>
      <slide>
        <h1>Measure, don’t guess!</h1>
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
        <a href="https://www.ameto.de"><img class="fullscreen" src="./assets/ameto.jpeg"></a>
      </slide>
      <slide>
        <h1>Thank you!</h1>
        <h1>Questions?</h1>
        <div class="spread">
          <span>Michael Seifert</span>
          <a href="https://www.digitalernachschub.de">digitalernachschub.de</a>
          <a href="https://www.ameto.de">ameto.de</a>
        </div>
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
@font-face {
  font-family: "Lato";
  src: url('./assets/fonts/LatoLatin-Regular.eot');
  src: url('./assets/fonts/LatoLatin-Regular.woff2') format('woff2')
       url('./assets/fonts/LatoLatin-Regular.woff') format('woff')
       url('./assets/fonts/LatoLatin-Regular.ttf') format('truetype');
}

.eg-slideshow {
  background-color: white !important;
  font-family: "Lato", sans-serif;
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

.eg-slideshow a {
  color: #0987D7;
  text-decoration: inherit;
}

.eg-slideshow a:visited {
  color: #0987D7;
  text-decoration: inherit;
}

.eg-slideshow h1 {
  font-size: 3em !important;
}

.eg-slideshow h2 {
  font-size: 2em !important;
}

.eg-slideshow .eg-code-block {
  font-size: 1em !important;
  margin-left: 4em;
}

h4 {
  text-align: center;
}

.eg-slideshow p, .eg-slideshow ul, .eg-slideshow ol {
  margin-left: 4em;
}

.eg-slideshow footer {
  position: absolute;
  bottom: 1em;
  font-size: 0.75em;
}

.eg-slide-content {
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

.eg-slide-content figure img, .eg-slide-content figure video, .eg-slide-content figure svg {
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

.eg-slide-content img.fullscreen {
  width: 100%;
  height: 100%;
  max-width:100%;
  margin: -1em 0;
}

.spread {
  margin: 3em 0;
  display: flex;
}

.spread > * {
  flex: 1;
  text-align: center;
}

</style>
