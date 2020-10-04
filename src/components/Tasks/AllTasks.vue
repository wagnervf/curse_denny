<template>
  <transition appear
  enter-active-class="animated zoomIn"
  leave-active-class="animated zoomOut absolute-top">
    <div>
      <q-banner inline-actions       
       class="text-white bg-blue-4 text-center">
       <span class="text-h6">All Tarefas</span>      
      </q-banner>
      <!-- Existe alguma chave -->
      <q-list separator>
         <q-item 
            v-for="(task, key) in allTasks"
            :key="key"
            clickable
            v-ripple
            :class="!task.completed ? 'bg-light-blue-1' : 'bg-green-1'"

            @click="updateTask({id: key, updates: { completed: !task.completed } })"

            v-touch-hold:50000.mouse="setTimeEdit"

            > 
            <q-item-section side top>
              <q-checkbox 
              :value="task.completed"         
               />
            </q-item-section>

            <q-item-section>
              <q-item-label
                :class="{'text-riscado' : task.completed}"
                v-html="$options.filters.grifarPesquisa(task.name, search)"
                >
               
              </q-item-label>
            </q-item-section>
            <!-- {{task.name }} -->
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
                      {{task.dueDate, configHora | niceDate }}
                      <!-- {{formatDateTime(task.dueDate)}} -->

                      <!-- {{ dateFormated }} -->
                  </q-item-label>                
                <!--   <q-item-label 
                    class="row justify-end" 
                    caption>
                      {{taskDueTime}}                 
                  </q-item-label> -->
                </div>
              </div>
            </q-item-section>
              

          <q-item-section side>
            <div class="row">
              <q-btn 
                @click.stop="editTask(task, key)"
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
              :id="idToSubmit"
              :task="taskToSubmit"
              @fechando="setTimeEdit" 
              />
          </q-dialog>

         </q-item>
       </q-list>
    </div>
  </transition>
</template>

<script>
  import { mapState, mapActions, mapGetters } from 'vuex'
  import ModalEditTask from 'components/Modals/EditTask.vue'
  import { date } from 'quasar'
  import mixinDelete  from '../../mixins/mixins-delete'


export default {
  mixins: [mixinDelete],

  props: ['task', 'id', 'allTasks'],

  components: {
    ModalEditTask
  },

  data () {
     return {
       showEditTask: false,
       idToSubmit: '',
       taskToSubmit: '',
       dateFormated: '',
       timeFormated: '' ,
    }
  },


  computed: {
     ...mapState('tasks', ['search']),
     ...mapGetters('settings', ['getSettings']),
     ...mapGetters('tasks', ['tasks']),

     configHora(){
      //Informação que veio do store-settings
       return this.getSettings.show12Hours
     },

  },

  filters: {
    niceDate(value, configHora){
    //  console.log(value, configHora)
    //  const { addTodate } = date
      //return date.formatDate(value, 'MMM D')
      //return date.formatDate(value, 'MMM D')
       //Informação que veio do store-setting
     if(configHora){
        return date.formatDate(value, 'DD-MM-YY - HH:mma')
       }
        return date.formatDate(value, 'DD/MM/YY - h:mmA')
      
    },
 

    grifarPesquisa(value, search){
      if(search){
        let searchRegExp = new RegExp(search, 'i')

        return value.replace(searchRegExp, (match) => {

          return '<span class="bg-yellow-6">' + match + '</span>'
          
        })
      }
      return value
    }
  },

  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),

    editTask(value, key){
      this.idToSubmit= key
      this.taskToSubmit= value
      this.showEditTask = true
    },

    // formatDateTime(value){
    //   if(value){
    //     this.dateFormated = date.formatDate(value, 'DD/MM/YY')
    //     this.timeFormated = date.formatDate(value, 'h:mmA')
      
    //     return 
    //   }
    // },

 

    // usando mixins
    // promptToDelete(id){
    //   this.$q.dialog({
    //     title: 'Confirmação',
    //     message: 'Deseja deletar a Tarefa?',
    //     cancel: true,
    //     persistent: true
    //   }).onOk(() => {
    //       this.deleteTask(id)
    //   })
    // },

    setTimeEdit(is){
      this.showEditTask = true
    }
  }
}
</script> 