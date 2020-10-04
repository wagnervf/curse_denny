<template>
 	<q-card>
    <q-card-section class="row">
      <div class="text-h6">Edit Task</div>
       <q-space />
        <q-btn
     		  v-close-popup
		      flat
		      icon="close"
		      dense
		      round
    		 />
    </q-card-section>

     <q-form @submit="submitForm">
				<q-card-section class="q-pt-none">
		  		<ModalTaskName 
            ref="ModalTaskName" 
            :name.sync="taskToSubmit.name" />

					<ModalDateAndTime 
						:DueDate.sync="taskToSubmit.dueDate"
						:DueTime.sync="taskToSubmit.dueTime"/>
    		</q-card-section>
	      <q-card-actions align="right">
	        <ModalButtons />
	      </q-card-actions>

     	</q-form>
   </q-card>
</template>

<script>
 import { mapActions } from 'vuex'
 import ModalTaskName from './ModalTaskName.vue'
 import ModalDateAndTime from './ModalDateAndTime.vue'
 import ModalButtons from './ModalButtons.vue'
 import mixinSubmit  from '../../mixins/mixins-submit'
 
export default {
  mixins: [mixinSubmit],
  
  props: ['task', 'id'],

 	components: {
 		ModalTaskName,
 		ModalDateAndTime,
 		ModalButtons
 	},
 data () {
    return {
      taskToSubmit:{}
   }
  },
  mounted() {
     this.taskToSubmit = Object.assign({},  this.task)
    //console.log(this.taskToSubmit)
  },

  methods: {
  	...mapActions('tasks', ['updateTask']),

 //  	submitForm(){
	// //set autofocus onde possui validade
	// 	this.$refs.ModalTaskName.$refs.name.validade
	// 	let formError = this.$refs.ModalTaskName.$refs.name.hasError
 //  		if(!formError){
 //  			this.submitTask()
	// 	  }
 //  	},



  	submitTask(){
  		this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
  		//enviando close para fechar o popup
  		//recebendo no componente add-task @fechando
  		this.$emit('fechando')
  	}
  }

}
</script>
			