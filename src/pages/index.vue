<script setup>
	document.title = 'Olah Data'

function download(filename, text) {  var element = document.createElement('a');  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));  element.setAttribute('download', filename);  element.style.display = 'none';  document.body.appendChild(element);  element.click();  document.body.removeChild(element);}

	const nama = ref('sepeda')

	function simpan(){
		download('data.txt', JSON.stringify(nama.value))
	}
</script>

<template>
	<p>Nama: {{nama}}</p>

	<p>Masukkan nama:</p>
	<input :value='nama' @input='x => nama = x.target.value'>

	<p><input type='file'></p>
	<p><button @click='simpan'>Save Data</button></p>
</template>

<style scoped>
	button {
		width: 200px;
		height: 100px;
	}
</style>
