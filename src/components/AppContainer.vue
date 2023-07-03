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
		<div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 gy-5">
			<div
				class="col"
				v-for="pokemon in pokemons">
				<AppPokeCard
					:key="pokemon.id"
					:id="pokemon.number"
					:img="pokemon.imageUrl"
					:name="pokemon.name"
					:type="pokemon.type1.toLowerCase()" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
