---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "The Contortionist's"
  text: "Handbook"
  tagline: Tutorial for becoming flexible
  image:
    src: /images/Mari_niddle.png
    alt: Contortion Pose
  actions:
    - theme: brand
      text: Introduction
      link: /introduction
    - theme: alt
      text: Splits
      link: /splits
    - theme: alt
      text: Backbend
      link: /backbends
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #4565d8 30%, #41d1ff);

  /* --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%); */
  /* --vp-home-hero-image-filter: blur(40px); */
}

@media (min-width: 960px) {
  .image-src {
    transform: scale(200%) translate(-50%, -40%) !important;
    transform-origin: top center;
  }
}
</style>