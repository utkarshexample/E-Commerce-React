import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/E-Commerce-React/", // Your GitHub repo name
  build: {
    outDir: "dist", // Output directory for the build
    rollupOptions: {
      output: {
        // Ensure module output is compatible for GitHub Pages
        format: "es",
      },
    },
  },
});
