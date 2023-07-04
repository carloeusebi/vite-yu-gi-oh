<script>
import axios from 'axios';
import { store } from './assets/store';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import AppLoader from './components/AppLoader.vue';
import AppArrowButton from './components/AppArrowButton.vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

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
	data() {
		return {
			type: '',
		};
	},

	methods: {
		changePage(page) {
			this.fetchPokemons(page);
		},
		changePokemonTypeFilter(newSelectedType) {
			this.type = newSelectedType;
			this.fetchPokemons();
		},

		fetchPokemons(page = '') {
			store.isLoading = true;
			let url = endpoint + '?';
			if (this.type) url += `eq[type1]=${this.type}&`;
			if (page) url += `page=${page}`;
			console.log(url);
			axios
				.get(url)
				.then(res => {
					store.pokemons.list = res.data.docs;
					store.pokemons.pages.prev = res.data.prevPage;
					store.pokemons.pages.next = res.data.nextPage;
					store.pokemons.pages.current = res.data.page;
					console.log(res.data);
				})
				.catch(e => {
					console.error(e);
				})
				.then(() => {
					store.isLoading = false;
				});
		},
	},
	components: { AppArrowButton, AppContainer, AppHeader, AppLoader },

	mounted() {
		this.fetchPokemons();
		fetchPokemonsTypes();
	},
};
</script>

<template>
	<AppArrowButton
		direction="prev"
		@change-page="changePage" />
	<AppHeader @selected-type-filter="changePokemonTypeFilter" />
	<AppContainer />
	<AppLoader />
	<AppArrowButton
		direction="next"
		@change-page="changePage" />
</template>

<style lang="scss"></style>
