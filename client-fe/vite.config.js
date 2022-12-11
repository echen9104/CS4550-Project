import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            "/images": "src/assets/images/"
        }
    },
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [path.resolve(__dirname, './src/style.less')]
        }
    },
    server: {
        host: '0.0.0.0',
        port: 4000,
        // 若端口被占用，尝试下一个可用端口
        strictPort: false,
        open: true,
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                rewrite: (path) => path.replace('/api', '')
            }
        }
    }
})
