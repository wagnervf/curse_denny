<template>
  <div>
      <tasksNaoFinalizadas 
        :tasksNaoFinalizadas="tasksNaoFinalizadas" />

      <hr>

      <tasksFinalizadas 
        :tasksFinalizadas="tasksFinalizadas"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex' 
  import tasksNaoFinalizadas from './tasksNaoFinalizadas'
  import tasksFinalizadas from './tasksFinalizadas'

export default {
   components: {
    tasksNaoFinalizadas,
    tasksFinalizadas
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


