<script>
export default {
	data() {
		return {
			selectedOption: '',
		};
	},
	props: {
		options: Array,
		defaultOption: {
			type: String,
			default: '',
		},
	},
	emits: ['selected-new-option'],
};
</script>

<template>
	<select
		v-model="selectedOption"
		@change="$emit('selected-new-option', selectedOption)">
		<option>{{ defaultOption }}</option>
		<option
			v-for="option in options"
			:key="option"
			:class="option.toLowerCase()">
			{{ option }}
		</option>
	</select>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;

select {
	padding: 0.5rem;
	border: 0.5rem solid $pokemons-yellow;
	cursor: pointer;
}

@each $type, $color in $types {
	.#{$type} {
		background-color: $color;
		@if $type == 'dark' or $type == 'ghost' {
			color: white;
		}
	}
}
</style>
