import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    coverage: {
      all: false,
    },
    environmentMatchGlobs: [['src/http/controllers/**', 'prisma']],
    dir: 'src', // Essa linha
  },
})
