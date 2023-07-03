<script>
export default {
	props: {
		id: Number,
		name: String,
		img: String,
		type: String,
	},
};
</script>

<template>
	<div :class="`poke-card ${type}`">
		<figure>
			<img
				class="img-fluid"
				:src="img"
				:alt="name" />
		</figure>
		<div># {{ id }}</div>
		<div>
			<strong>{{ name }}</strong>
		</div>
		<div>
			<em>{{ type }}</em>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../assets/sass/vars' as *;
.poke-card {
	background-color: white;
	text-align: center;
	border-radius: 20px;
	padding: 1rem 2rem;

	figure {
		background-color: white;
		border-radius: 50%;
		width: 175px;
		height: 175px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: auto;
		overflow: hidden;
		margin-bottom: 2rem;
	}

	@each $type, $color in $types {
		&.#{$type} {
			background-color: $color;
		}
	}
}
</style>
