<template>
	
		 <q-input 		 
		 v-model="searchField" 
		 label="Pesquisar"
		 outlined
		 class="col"
		 >
       
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

	export default {
	  data () {
	    return {
	      
	    }
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