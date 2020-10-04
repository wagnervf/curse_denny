<template>
  <div>
      <q-banner 
        v-if="
        !Object.keys(tasksNaoFinalizadas).length && 
        !Object.keys(tasksFinalizadas).length &&
        search"
        dense rounded inline-actions class="text-white bg-deep-orange-5">
          Nenhum resultado encontrado!          
       </q-banner>

      
        <noTasks v-if="!Object.keys(tasksNaoFinalizadas).length && !search" />

        <div v-if="!configList">
          <tasksNaoFinalizadas
           v-if="Object.keys(tasksNaoFinalizadas).length"
          :tasksNaoFinalizadas="tasksNaoFinalizadas"
          class="q-pb-lg" />

          <br>
        
          <tasksFinalizadas 
            :tasksFinalizadas="tasksFinalizadas"/>
          </transition>
        </div>

        <div v-else>

          <allTasks 
           :allTasks="allTasks"
          >
            
          </allTasks>
        </div>


  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters, mapState } from 'vuex' 
  import tasksNaoFinalizadas from './tasksNaoFinalizadas'
  import tasksFinalizadas from './tasksFinalizadas'
  import noTasks from './noTasks'
  import allTasks from './AllTasks'

export default {
   components: {
    tasksNaoFinalizadas,
    tasksFinalizadas,
    noTasks,
    allTasks
   },

  data () {
    return {
    }
  },

 mounted () {
  this.configList
 },


  computed: {
    ...mapGetters('tasks', ['tasksNaoFinalizadas', 'tasksFinalizadas', 'allTasks']),
     ...mapGetters('settings', ['getSettings']),

    //acessando diretamenteo o search
    ...mapState('tasks', ['search']),

    configList(){
      //Informação que veio do store-settings
      return this.getSettings.showTasksInOneList
     },


  },

  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
  }


}
</script>


