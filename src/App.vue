<template>
<div>
	<header class="header">
		
	</header>
</div>
</template>

<script>
import Mogo from './Mogo.js';
export default{
	data(){
		return {
			headerHeight: 0,
		}
	},
	computed: {
	},
	mounted(){
		console.log(Mogo.version);
		console.log(Mogo.ApiTool.trim('ajlksdkfasd alsdfkaksd'));
	}
}
</script>

<style scoped lang="scss">
</style>
