<script setup>
	document.title = 'Olah Data'

	const nama = ref('sepeda')

	function simpan(){
		
	}
</script>

<template>
	<p>Nama: {{nama}}</p>

	<p>Masukkan nama:</p>
	<input :value='nama' @input='x => nama = x.target.value'>
	
	<p><button>Open Data</button></p>
	<p><button @click='simpan'>Save Data</button></p>
</template>

<style scoped>
	button {
		width: 200px;
		height: 100px;
	}
</style>
