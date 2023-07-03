<script>
import axios from 'axios';
import { store } from './assets/store';
import AppHeader from './components/AppHeader.vue';
import AppContainer from './components/AppContainer.vue';
import AppLoader from './components/AppLoader.vue';

const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons';

export default {
	data() {
		return {
			store,
			isLoading: true,
		};
	},

	methods: {
		fetchPokemons() {
			this.isLoading = true;

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
					// this.isLoading = false;
				});
		},
	},

	components: { AppContainer, AppHeader, AppLoader },

	created() {
		this.fetchPokemons();
	},
};
</script>

<template>
	<AppHeader />
	<AppContainer />
	<AppLoader />
</template>

<style></style>
