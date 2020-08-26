<template>
	 <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="check" color="primary" />
      </template>
      Você não possui tarefas para hoje!
      <template v-slot:action>
        <q-btn 
        	flat 
        	color="primary" 
        	label="Adicionar Tarefa" 
        	@click="$root.$emit('showAddTask')"/>
      </template>
      <!-- Usando variável global para enviar comando -->
    </q-banner>
</template>