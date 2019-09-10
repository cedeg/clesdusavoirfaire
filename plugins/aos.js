import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 50,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'center-bottom'
  })
)
