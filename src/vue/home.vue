<template>
	<div class="home-con">
		<ul>
			<li>github</li>
			<li v-link="{name : 'blog'}">blog</li>
			<li>segment</li>
			<li v-link="{name : 'about'}">about</li>
		</ul>
	</div>
</template>
<script>
	
</script>
<style lang="sass">
	@import '../scss/home.scss';
	.home-con{
		width: 400px;
		height: 400px;
		li {
			list-style: none;
		}
	}
</style>