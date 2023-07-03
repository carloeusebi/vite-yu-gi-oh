<script>
import axios from 'axios';
import { store } from './assets/store';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

axios.get(endpoint).then(res => {
	console.log(res.data);
	store.pokemons.list = res.data.docs;
	store.pokemons.pages.prev = res.data.prevPage;
	store.pokemons.pages.next = res.data.nextPage;
	store.pokemons.pages.current = res.data.page;
});
</script>

<template>
	<h1>hello</h1>
</template>

<style scoped></style>
