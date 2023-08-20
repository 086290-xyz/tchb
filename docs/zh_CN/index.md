---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "柔术训练者"
  text: "手册"
  tagline: 专业的柔韧性练习指导
  image:
    src: /images/Mari_niddle.png
    alt: Contortion Pose
  actions:
    - theme: brand
      text: 导论
      link: /zh_CN/introduction
    - theme: alt
      text: 劈叉
      link: /zh_CN/splits
    - theme: alt
      text: 后折
      link: /zh_CN/backbends
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