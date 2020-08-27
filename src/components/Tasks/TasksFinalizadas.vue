<template>
  <div>
  	<q-banner inline-actions 
  		v-if="Object.keys(tasksFinalizadas).length"
  		class="text-white bg-green-4 text-center">
      <span class="text-h6">Finalizadas</span>      
    </q-banner>
    <!-- Existe alguma chave -->
     <q-list  separator>
	    <q-item 
	        v-for="(task, key) in tasksFinalizadas"
	        :key="key"
	        clickable
	        v-ripple
	        :class="!task.completed ? 'bg-light-blue-1' : 'bg-green-1'"
	        @click="updateTask({id: key, updates: { completed: !task.completed } })"
	        > 
	      <q-item-section side top>
	        <q-checkbox 
	        :value="task.completed"
	       
	         />
	      </q-item-section>

	      <q-item-section>
	        <q-item-label
	          :class="{'text-riscado' : task.completed}">
	          {{task.name}}
	        </q-item-label>
	      </q-item-section>

	      <!-- Mostra a data se possuir -->
	      <q-item-section
	        v-if="task.dueDate"
	        side
	        >
	        <div class="row">
	         <div class="column"> 
	          <q-icon 
	          name="event" 
	          size="18px" 
	          class="q-mr-xs"
	          />
	         </div>
	          <div class="column">
	            <q-item-label 
	              class="row justify-end" 
	              caption>
	                {{task.dueDate}}
	            </q-item-label>
	            <q-item-label 
	              class="row justify-end" 
	              caption>
	              <small>{{task.dueTime}}</small>
	          </q-item-label>
	          </div>
	        </div>
	      </q-item-section>
	          

	      <q-item-section side>
	        <div class="row">       
	            <q-btn 
	            @click.stop="promptToDelete(key)"
	            flat 
	            round 
	            color="red" 
	            icon="delete" 
	            dense />
	        </div>
	      </q-item-section>
	    </q-item>
	  </q-list>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'


export default {

  props: ['task', 'id', 'tasksFinalizadas'],


  data () {
    return {
    }
  },

  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),

    promptToDelete(id){
      this.$q.dialog({
        title: 'Confirmação',
        message: 'Deseja deletar a Tarefa?',
        cancel: true,
        persistent: true
      }).onOk(() => {
          this.deleteTask(id)
      })
    }
  }
}
</script>