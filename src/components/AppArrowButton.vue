<script>
import { store } from '../assets/store';
import { fetchPokemons } from '../App.vue';

export default {
	data() {
		return {
			store,
		};
	},

	props: {
		direction: String,
	},

	computed: {
		page() {
			return store.pokemons.pages[this.direction];
		},
	},

	methods: {
		fetchPage() {
			fetchPokemons(this.page);
		},
	},
};
</script>

<template>
	<div
		v-if="page"
		@click="fetchPage"
		:class="`arrow ${direction}`"></div>
</template>

<style lang="scss" scoped>
.arrow {
	position: fixed;
	top: 50%;
	width: 0;
	height: 0;
	translate: 0 -50%;
	cursor: pointer;
	transition: scale 150ms;

	border-top: 50px solid transparent;
	border-bottom: 50px solid transparent;

	&:hover {
		scale: 1.1;
	}
}
.next {
	border-left: 90px solid #ffcc01;
	right: 5rem;
}

.prev {
	border-right: 90px solid #ffcc01;
	left: 5rem;
}
</style>
