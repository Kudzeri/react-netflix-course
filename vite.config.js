import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: process.env.PORT || 4173,
    host: true,
  },
  preview: {
    port: process.env.PORT || 4173,
    host: true,
  },
  plugins: [react(), tailwindcss()],
});
