// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPagesBuild = process.env["APP_DEPLOY_TARGET"] === "github-pages";

export default defineConfig({
  vite: {
    // GitHub Pages serves this project from a repository subpath.
    base: isGitHubPagesBuild ? "/shreenathpackersmovers/" : "/",
    // Allow the dynamic host used by Arena's browser preview proxy.
    server: { allowedHosts: [".e2b.app"] },
  },
  tanstackStart: {
    ...(isGitHubPagesBuild ? { prerender: { enabled: true, crawlLinks: true } } : {}),
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
