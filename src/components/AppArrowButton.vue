<script>
import { store } from '../assets/store';

export default {
	props: {
		direction: String,
	},
	computed: {
		page() {
			return store.pokemons.pages[this.direction];
		},
	},
	methods: {
		changePage() {
			this.$emit('change-page', this.page);
		},
	},
	emits: ['change-page'],
};
</script>

<template>
	<div
		v-if="page"
		@click="changePage"
		:class="`arrow ${direction}`"></div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;
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
	border-left: 90px solid $pokemons-yellow;
	right: 5rem;
}

.prev {
	border-right: 90px solid $pokemons-yellow;
	left: 5rem;
}
</style>
