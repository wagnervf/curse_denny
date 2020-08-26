<template>
  <div>

      <noTasks v-if="!Object.keys(tasksNaoFinalizadas).length" />

      <tasksNaoFinalizadas
         v-else 
        :tasksNaoFinalizadas="tasksNaoFinalizadas" />

     <br>

      <tasksFinalizadas 
        :tasksFinalizadas="tasksFinalizadas"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex' 
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
    ...mapGetters('tasks', ['tasksNaoFinalizadas', 'tasksFinalizadas'])
  },

  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
  }


}
</script>


