import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { viteSingleFile } from "vite-plugin-singlefile";
import { loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tailwindcss(), tsconfigPaths(), viteSingleFile()],
    server: {
      hmr: true,
      port: 3000,
      allowedHosts: true,

      proxy: {
        "/api": {
          target: env.VITE_API_BASE,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});