<template>
	<div class="hello">
		<h1>{{msg}}</h1>
		<h1>{{msgfromfather}}</h1>
		<button @click="onClickMe">Click!</button>
	</div>
</template>

<script>
export default{
	data: function() {
		return{
			msg: 'from component a'
		}
	},
	props: ['msgfromfather'],
	methods: {
		onClickMe: function(){
			this.$emit('child-tell-me-something',this.msg);
		}
	}
}
</script>

<style>
	h1{
		color: #42B983;
	}
</style>