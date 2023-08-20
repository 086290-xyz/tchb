import { defineConfig } from "vitepress";
import MarkdownItAttrs from "markdown-it-attrs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TCHB",
  description: "A VitePress Site",
  locales: {
    root: {
      label: "English",
      lang: "en",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/" },
          { text: "Intro", link: "/introduction" },
        ],
        sidebar: [
          { text: "A bit about backs end backbends", link: "/backinfo" },
          // { text: "About the author", link: "/404" },
          { text: "Backbend, backfolds", link: "/backbends" },
          { text: "Ballet boots", link: "/balletboots" },
          { text: "Ballet positions", link: "/ballet_positions" },
          { text: "Examples of assisted partner stretches", link: "/assparex" },
          { text: "Frontbend exercise", link: "/frontbends" },
          { text: "Importance of healthy breathing", link: "/breathing" },
          {
            text: "Leg behind the back",
            link: "/legs_behind_the_back",
          },
          { text: "Other leg exercises", link: "/other_leg_exercises" },
          {
            text: "Shoulder stretches, shoulder dislocations",
            link: "/shoulders",
          },
          {
            text: "Splits, oversplits, dislocations of the hips",
            link: "/splits",
          },
          { text: "The contortion barre", link: "/contortion_barre" },
          { text: "Twists and other back exercises", link: "/twists" },
          { text: "Yoga and contortion love making", link: "/lovemaking" },
        ],
      },
    },
    zh_CN: {
      label: "简体中文",
      lang: "zh_CN",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "主页", link: "/zh_CN/" },
          { text: "导论", link: "/zh_CN/introduction" },
        ],
        sidebar: [
          { text: "关于后背和后弯的二三事", link: "/zh_CN/backinfo" },
          // { text: "About the author", link: "/404" },
          { text: "后弯与后折", link: "/zh_CN/backbends" },
          { text: "芭蕾靴", link: "/zh_CN/balletboots" },
          { text: "芭蕾脚位", link: "/zh_CN/ballet_positions" },
          { text: "辅助拉伸练习的例子", link: "/zh_CN/assparex" },
          { text: "前折", link: "/zh_CN/frontbends" },
          { text: "健康呼吸的重要性", link: "/zh_CN/breathing" },
          {
            text: "腿在背后",
            link: "/zh_CN/legs_behind_the_back",
          },
          { text: "其它腿部练习", link: "/zh_CN/other_leg_exercises" },
          {
            text: "肩部拉伸与脱臼",
            link: "/zh_CN/shoulders",
          },
          {
            text: "劈叉、超级劈叉与臀部脱臼",
            link: "/zh_CN/splits",
          },
          { text: "柔术把杆", link: "/zh_CN/contortion_barre" },
          { text: "扭腰与其它腰部练习", link: "/zh_CN/twists" },
          { text: "瑜伽、柔术与性生活", link: "/zh_CN/lovemaking" },
        ],
      },
    },
  },
  themeConfig: {
    socialLinks: [
      { icon: "github", link: "https://github.com/086290-xyz/tchb" },
    ],
  },
  markdown: {
    config: (md) => {
      md.use(MarkdownItAttrs);
    },
  },
});
