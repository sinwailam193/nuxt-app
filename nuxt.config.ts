import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
});
