<script>
import axios from 'axios';
import { store } from './assets/store';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import AppLoader from './components/AppLoader.vue';
import AppArrowButton from './components/AppArrowButton.vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

/**
 * fetch the types, than stores them in the.. store :D
 */
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
			searchWord: '',
		};
	},

	methods: {
		/**
		 * fetch another page
		 * @param {string} page
		 */
		changePage(page) {
			this.fetchPokemons(page);
		},
		/**
		 * sets a type and fetch the pokemons, the selected type will remain as  filter for the next fetches
		 * @param {string} newSelectedType
		 */
		changePokemonTypeFilter(newSelectedType) {
			this.type = newSelectedType;
			this.fetchPokemons();
		},
		/**
		 * sets the search term for the search, the word will remain to filter next fetches
		 * @param {string} word
		 */
		changeSearchWord(word) {
			this.searchWord = word;
			this.fetchPokemons();
		},

		/**
		 * fetch pokemons, the function can build the url by itself based on how the variables are set in the environment
		 * @param {string} page
		 */
		fetchPokemons(page = '') {
			store.isLoading = true;

			// mounting the url this way allows to combine the search word and types
			let url = endpoint + '?';
			if (this.type) url += `eq[type1]=${this.type}&`;
			if (this.searchWord) url += `q[name]=${this.searchWord}&`;
			if (page) url += `page=${page}`;

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
		},
	},
	components: { AppArrowButton, AppContainer, AppHeader, AppLoader },

	mounted() {
		// at mount fetches the first 10 pokemons, then make another call to fetch the pokemon types, that will populate the select in the header
		this.fetchPokemons();
		fetchPokemonsTypes();
	},
};
</script>

<template>
	<AppArrowButton
		direction="prev"
		@change-page="changePage" />

	<AppHeader
		@selected-type-filter="changePokemonTypeFilter"
		@search="changeSearchWord" />

	<!-- THE CONTAINER IS WHERE THE CARDS ARE AT -->
	<AppContainer />

	<AppArrowButton
		direction="next"
		@change-page="changePage" />

	<AppLoader />
</template>

<style lang="scss"></style>
