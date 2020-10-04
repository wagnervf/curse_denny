<template>

		 <q-input 		 
		 v-model="searchField" 
		 label="Pesquisar"
		 @keyup.esc="searchField = ''"
		 outlined
		 class="col"
		 v-seleciona-tudo
		 >
		  <!-- v-seleciona-tudo -->
    	<!-- Directives selecionar todos os dados qndo abrir input -->
      
      <!-- @keyup.esc="searchField = ''" -->
      <!-- Limpar o campo após clicar em esc -->

        <template v-slot:append>
          <q-icon
           v-if="searchField !== ''" name="close" 
           @click="searchField = ''" class="cursor-pointer" />
          <q-icon name="search" />
        </template>
      </q-input>
	
</template>

<script>
	// Mapeando e utilizando diretament a variável state, nesse caso não estou usando mutations ou actions por que será apenas consulta de dados
	import { mapState, mapActions } from 'vuex'
	import { selecionaTudo } from 'src/directives/directives-all'

	export default {
	  data () {
	    return {
	      
	    }
	  },
   	directives: {
    	selecionaTudo
   	},

	  computed: {
	  	...mapState('tasks', ['search']),

	  	searchField: {
	  		get() {
	  			//retorna o valor do search do store, sem usar get, acessando diretamente o valor da store
	  			return this.search
	  		}, 
	  		set(value){
	  			// acionando a action do methods
	  			this.setSearch(value)
	  		}
	  	}
	  },

	  methods: {
	  	...mapActions('tasks', ['setSearch'])
	  }
	}
</script>