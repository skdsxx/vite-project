import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require("path");

// https://vitejs.dev/config/
export default defineConfig({

  alias: {
    // 配置路径别名
    '@': resolve(__dirname, 'src'),
    'view': resolve(__dirname, 'src/views'),
    'com': resolve(__dirname, 'src/components'),
    'api': resolve(__dirname, 'src/api'),
    'utils': resolve(__dirname, 'src/utils'),
  },
  plugins: [vue()],
   // hostname: '0.0.0.0',
  // port: 8090,
  // 是否自动在浏览器打开
  // open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
   base: './',
   /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: 'dist',
  server: {
    proxy: {
      '/api': {
        target: 'http://192.168.163.154:8088/',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      },
    },
    }
})
