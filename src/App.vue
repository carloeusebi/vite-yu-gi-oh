<script>
import axios from 'axios';
import { store } from './assets/store';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import AppLoader from './components/AppLoader.vue';
import AppArrowButton from './components/AppArrowButton.vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

const fetchPokemons = (page = '') => {
	store.isLoading = true;
	const url = page ? endpoint + `?page=${page}` : endpoint;
	axios
		.get(url)
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

const fetchPokemonsTypes = () => {
	const url = endpoint + '/types1';
	axios
		.get(url)
		.then(res => {
			store.pokemons.types = res.data;
		})
		.catch(e => {
			console.error(e);
		});
};

export default {
	methods: {
		changePage(page) {
			fetchPokemons(page);
		},
		fetchPokemonsByType(type) {
			console.log(type);
		},
	},

	components: { AppArrowButton, AppContainer, AppHeader, AppLoader },

	created() {
		fetchPokemons();
		fetchPokemonsTypes();
	},
};
</script>

<template>
	<AppArrowButton
		direction="prev"
		@change-page="changePage" />
	<AppHeader @selected-type-filter="fetchPokemonsByType" />
	<AppContainer />
	<AppLoader />
	<AppArrowButton
		direction="next"
		@change-page="changePage" />
</template>

<style lang="scss"></style>
