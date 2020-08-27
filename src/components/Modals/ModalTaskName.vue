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
	</div>
</template>

<script>	
  export default {
   props: ['name'],

   //qndo abrir o modal o texto do nome da tarefa virá selecionado.
   directives: {
   	selecionaTudo: {
   		inserted(el) {
   			let input = el.querySelector('.q-field__native')

   			input.addEventListener('focus', () =>{
   					if(input.value.length){
   						input.select()
   					}
   			})
   		}
   	}
   }

  }

</script>