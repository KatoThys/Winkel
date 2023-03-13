import './styles/reset.css';
import './styles/style.css';

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const apiKey =
  'pk.eyJ1Ijoia2F0b3RoeXMiLCJhIjoiY2xlbWs3a3hiMGEyMjNwb2ZzcndoZWQwbyJ9.Eu7wCudOsZURFvTuHbA9xQ';
const coordinates = [4.386124, 51.106167];

const addressElement = document.getElementById('address');
const loaderElement = document.getElementById('loader');

const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?access_token=${apiKey}`;

async function getAdressFromCoordinates() {
  try {
    // Show the loader
    loaderElement.style.display = 'block';

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    // Hide the loader and show the address
    loaderElement.style.display = 'none';

    addressElement.textContent = data.features[0].place_name;
  } catch (error) {
    console.error('er is een fout opgetreden');
  }
}

getAdressFromCoordinates();
