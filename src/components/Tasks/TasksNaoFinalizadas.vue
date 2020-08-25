<template>
  <div>
    <!-- Existe alguma chave -->
    <q-list padding separator>
       <q-item 
              v-for="(task, key) in tasksNaoFinalizadas"
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
              @click.stop="showEditTask = true"
              flat 
              round 
              color="primary" 
              icon="edit" 
              dense />

              <q-btn 
              @click.stop="promptToDelete(key)"
              flat 
              round 
              color="red" 
              icon="delete" 
              dense />

          </div>
        </q-item-section>

        <q-dialog v-model="showEditTask">
          <ModalEditTask
            :id="key"
            :task="task" 
            @fechando="showEditTask = true" 
            />
        </q-dialog>
       </q-item>
     </q-list>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import ModalEditTask from 'components/Modals/EditTask.vue'
export default {

  props: ['task', 'id', 'tasksNaoFinalizadas'],

  data () {
     return {
       showEditTask: false,
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