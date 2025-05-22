import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

// This is the correct setup for a library, not a web app
export default defineConfig({
  plugins: [svelte()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "svelte-svg-icons",
      fileName: (format) => `svelte-svg-icons.${format}.js`,
    },
    rollupOptions: {
      external: ["svelte"],
      output: {
        globals: {
          svelte: "svelte",
        },
      },
    },
  },
});
