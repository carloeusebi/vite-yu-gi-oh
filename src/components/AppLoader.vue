<script>
export default {};
</script>

<template>
	<div class="layover">
		<figure>
			<img
				class="loader"
				src="pokeball.png"
				alt="PokeLoader" />
		</figure>
	</div>
</template>

<style scoped>
.layover {
	background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}

.loader {
	width: 200px;
	height: 200px;
	animation: spin 4s linear infinite;
}

@keyframes spin {
	to {
		rotate: 360deg;
	}
}
</style>
