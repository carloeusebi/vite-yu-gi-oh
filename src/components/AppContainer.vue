<script>
import AppPokeCard from './AppPokeCard.vue';
import { store } from '../assets/store';
export default {
	data() {
		return store;
	},
	components: { AppPokeCard },
};
</script>

<template>
	<div class="container">
		<div class="row row-cols-2 row-cols-md-3 row-cols-xl-5 gy-5">
			<div
				class="col"
				v-for="pokemon in pokemons.list">
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
