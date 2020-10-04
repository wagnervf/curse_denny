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
		clearable	

		v-seleciona-tudo
		/>
    <!-- v-seleciona-tudo -->
    <!-- Directives selecionar todos os dados qndo abrir input -->
	</div>
</template>

<script>	
  import { selecionaTudo } from 'src/directives/directives-all'
  export default {
   props: ['name'],

   //qndo abrir o modal o texto do nome da tarefa virá selecionado.
   directives: {
    selecionaTudo
   }

  }

</script>