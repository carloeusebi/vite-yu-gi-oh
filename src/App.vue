<script>
import axios from 'axios';
import { store } from './assets/store';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import AppLoader from './components/AppLoader.vue';
import AppArrowButton from './components/AppArrowButton.vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

export const fetchPokemons = (page = '') => {
	store.isLoading = true;
	axios
		.get(`${endpoint}`)
		.then(res => {
			store.pokemons.list = res.data.docs;
			store.pokemons.pages.prev = res.data.prevPage;
			store.pokemons.pages.next = res.data.nextPage;
			store.pokemons.pages.current = res.data.page;
		})
		.catch(e => {
			console.error(e);
		})
		.then(() => {
			store.isLoading = false;
		});
};

export default {
	data() {
		return {
			store,
		};
	},

	components: { AppArrowButton, AppContainer, AppHeader, AppLoader },

	created() {
		fetchPokemons();
	},
};
</script>

<template>
	<AppArrowButton direction="prev" />
	<AppHeader />
	<AppContainer />
	<AppLoader />
	<AppArrowButton direction="next" />
</template>

<style lang="scss"></style>
