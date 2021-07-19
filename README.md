# Template Vue

## Persiapan Menggunakan

Install pnpm:

```bash
npm i -g pnpm
```

## Download Template

Pertama, download degit:

```bash
pnpm i -g degit
```

Terus, download dengan perintah:

```bash
degit mzaini30/vue new-project
```

## Fitur

1. PWA udah otomatis (setting manifest di `vite.config.js`)
2. Router berbasis file menggunakan [Vue Route Generator](https://www.npmjs.com/package/vue-route-generator)
3. Global Store dengan [Provide Inject](https://vuejsdevelopers.com/2020/10/05/composition-api-vuex/). Bisa juga baca artikel yang aku buat tentang [provide inject sebagai pengganti Vuex](https://catatanzen.my.id/global-store-di-vue-3/)
4. Menggunakan [Vue Global API](https://www.npmjs.com/package/vue-global-api)
