// plugins/slick-slider.js
import Vue from 'vue';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Create a global event bus
const eventBus = new Vue();

Vue.directive('slick', {
  bind(el, binding) {
    const options = binding.value || {};

    // Add a flag to track whether Slick Slider is initialized
    el.__slickInitialized = false;

    // Define a function to initialize Slick Slider
    const initSlick = () => {
      // Ensure the Slick Slider is only initialized on the client-side
      if (process.client && !el.__slickInitialized) {
        require('slick-carousel/slick/slick.min.js');

        // Initialize the Slick Slider
        $(el).slick(options);

        // Update the flag to indicate that Slick Slider is initialized
        el.__slickInitialized = true;
      }
    };

    // Listen for the component mount event using the global event bus
    setTimeout(()=>{
      console.log('testttttt')
      initSlick()
    },2000)


    // Check if the component is already mounted
    if (el.isConnected) {
      initSlick();
    }
  },
});

export default {};
