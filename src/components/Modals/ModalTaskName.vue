<template>
<div class="row q-pa-sm">
	<q-input 
  		outlined		
		:value="name"
		@input="$emit('update:name', $event)"
		label="Task *"			       
		lazy-rules
		:rules="[ val => val && val.length > 0 || 'Campo Obrigatório']"
		class="col"
		ref="name"
		autofocus
		clearable	/>
	</div>
</template>

<script>	
  export default {

   props: ['name']

  }

</script>