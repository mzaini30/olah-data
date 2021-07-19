<script setup>
	document.title = 'Olah Data'

	const nama = ref('sepeda')
</script>

<template>
	<p>Nama: {{nama}}</p>
	<p><button>Open Data</button></p>
	<p><button>Save Data</button></p>
</template>

<style scoped>
	button {
		width: 200px;
		height: 100px;
	}
</style>
