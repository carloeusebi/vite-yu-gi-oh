<script>
import AppPokeCard from './AppPokeCard.vue';
import { store } from '../assets/store';
export default {
	computed: {
		pokemons() {
			return store.pokemons.list;
		},
	},

	components: { AppPokeCard },
};
</script>

<template>
	<div class="container">
		<div class="row row-cols-2 row-cols-md-3 row-cols-lg-5">
			<AppPokeCard
				v-for="pokemon in pokemons"
				:key="pokemon.id"
				:img="pokemon.imageUrl"
				:name="pokemon.name"
				:type="pokemon.type" />
		</div>
	</div>
</template>

<style scoped></style>
