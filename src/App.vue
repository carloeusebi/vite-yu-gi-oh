<script>
import axios from 'axios';
import { store } from './assets/store';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

const fetchPokemons = page => {
	axios
		.get(`${endpoint}`)
		.then(res => {
			console.log(res.data);
			store.pokemons.list = res.data.docs;
			store.pokemons.pages.prev = res.data.prevPage;
			store.pokemons.pages.next = res.data.nextPage;
			store.pokemons.pages.current = res.data.page;
		})
		.catch(e => {
			console.error(e);
		});
};
export default {
	data() {
		return {
			store,
		};
	},

	components: { AppContainer, AppHeader },

	created() {
		fetchPokemons();
	},
};
</script>

<template>
	<AppHeader />
	<AppContainer />
</template>

<style></style>
