import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
<<<<<<< HEAD

=======
>>>>>>> FE5_김기수
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
});
