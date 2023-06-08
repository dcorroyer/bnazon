<script setup>
import BackToTop from './components/BackToTop.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue'
import Navbar from './components/Navbar.vue';
import Portfolio from './components/Portfolio.vue';
</script>

<template>
  <Navbar />
  <main class="p-6 md:pt-20">
    <Portfolio />
  </main>
  <Contact />
  <BackToTop />
  <Footer />
</template>
