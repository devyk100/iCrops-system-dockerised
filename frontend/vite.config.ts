import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg', '**/*.ico', '**/*.webp', '**/*.mp4', '**/*.webm', '**/*.ogv', '**/*.ogg', '**/*.mp3', '**/*.m4a', '**/*.wav', '**/*.flac', '**/*.aac', '**/*.woff', '**/*.woff2', '**/*.eot', '**/*.ttf', '**/*.otf', '**/*.wasm', '**/*.webmanifest', '**/*.xml', '**/*.pdf', '**/*.txt', '**/*.md', '**/*.json', '**/*.csv', '**/*.xls', '**/*.xlsx', '**/*.ppt', '**/*.pptx', '**/*.doc', '**/*.docx', "**/*.apk"],

})
