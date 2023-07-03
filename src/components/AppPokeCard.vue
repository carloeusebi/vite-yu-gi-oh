<script>
export default {
	props: {
		id: String,
		name: String,
		img: String,
		type: String,
	},
};
</script>

<template>
	<div :class="`poke-card`">
		<figure>
			<img
				:src="img"
				:alt="name" />
		</figure>
		<div>{{ id }}</div>
		<div>
			<strong>{{ name }}</strong>
		</div>
		<div>
			<em>{{ type }}</em>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.poke-card {
	background-color: white;
}
</style>
