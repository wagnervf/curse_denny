<template>
  <div>

      <noTasks v-if="!Object.keys(tasksNaoFinalizadas).length && !search" />

      <q-banner 
        v-if="
        !Object.keys(tasksNaoFinalizadas).length && 
        !Object.keys(tasksFinalizadas).length &&
        search"
        dense rounded inline-actions class="text-white bg-deep-orange-5">
          Nenhum resultado encontrado!          
       </q-banner>

      <tasksNaoFinalizadas
         v-if="Object.keys(tasksNaoFinalizadas).length"
        :tasksNaoFinalizadas="tasksNaoFinalizadas" />

     <br>

      <tasksFinalizadas 
        :tasksFinalizadas="tasksFinalizadas"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters, mapState } from 'vuex' 
  import tasksNaoFinalizadas from './tasksNaoFinalizadas'
  import tasksFinalizadas from './tasksFinalizadas'
  import noTasks from './noTasks'

export default {
   components: {
    tasksNaoFinalizadas,
    tasksFinalizadas,
    noTasks
   },

  data () {
    return {
    }
  },

  computed: {
    ...mapGetters('tasks', ['tasksNaoFinalizadas', 'tasksFinalizadas']),

    //acessando diretamenteo o search
    ...mapState('tasks', ['search'])
  },

  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
  }


}
</script>


