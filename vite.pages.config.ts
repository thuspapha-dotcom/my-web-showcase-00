import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const base = repositoryName === "thuspapha-dotcom.github.io" ? "/" : "/my-web-showcase-00/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  build: {
    outDir: "dist-pages",
    emptyOutDir: true,
  },
});
