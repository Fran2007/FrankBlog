// import Header from "../components/Header.astro";
// import CardLayout from "../layouts/CardLayout.astro";

import { frontmatter } from "../posts/Astro-vs-otros-frameworks.astro";
import { frontmatterJs } from "../posts/Programacion-con-js.astro";
import { frontmatterCss } from "../posts/Guia-de-css.astro";
import { frontmatterVue } from "../posts/Explorando-vue.astro";
import { frontmatterReact } from "../posts/introduccion-a-react.astro";
import { frontmatterVercel } from "../posts/Vercel-ventajas.astro";
import { frontmatterAngular } from "../posts/Introduccion-a-angular.astro";
import { frontmatterAstoVentages } from "../posts/Ventajas-de-astro.astro";

export const Posts = [
  {
    ref: "/posts/astro-vs-otros-frameworks",
    ...frontmatter,
    description: "En este blog hablaremos de las ventajas de astro js",
  },

  {
    ref: "/posts/explorando-vue",
    ...frontmatterVue,
    description:
      "En este blog nos sumergiremos en los facinantes conceptos de vuejs",
  },

  {
    ref: "/posts/introduccion-a-react",
    ...frontmatterReact,
    description:
      "En este blog nos sumergiremos en los facinantes conceptos de react",
  },

  {
    ref: "/posts/Ventajas-de-astro",
    ...frontmatterAstoVentages,
    description:
      "En este blog nos sumergiremos en los facinantes conceptos de vuejs",
  },

  {
    ref: "/posts/Introduccion-a-angular",
    ...frontmatterAngular,
    description: "En este blog no sumergiremos en los conceptos de angular",
  },

  {
    ref: "/posts/Vercel-ventajas",
    ...frontmatterVercel,
    description: "En este blog nos sumergiremos en las ventajas de Vercel",
    tags: ["developer", "ui"],
  },

  {
    ref: "/posts/Guia-de-css",
    ...frontmatterCss,
    description:
      "Esta guia esta disenada para ayudarte a comprender y utilizar CSS de manera efectiva.",
  },

  {
    ref: "/posts/Programacion-con-js",
    ...frontmatterJs,
    description:
      "Esta guia esta disenada para ayudarte a comprender y utilizar JavaScript de manera efectiva.",
  },
];

export function getPostByRef(post) {
  return Posts.find((p) => p.ref === post);
}
