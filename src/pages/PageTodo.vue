<template>
  <q-page>

    <div class="q-pa-md absolute full-width full-height column">
      
      <div class="row q-mb-lg">
        <Search />
        <Sort />
      </div>

      <q-scroll-area class="q-scroll-task">
          <Tasks />
      </q-scroll-area>

      <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
        <q-btn
        round
        color="primary"
        size="24px"
        icon="add"
        @click="showAddTask = true"
        class="all-pointer-events"
        />
      </div>   

      <q-dialog v-model="showAddTask">
          <add-task @fechando="showAddTask = false" />
      </q-dialog>

    </div>



  </q-page>
</template>

<script>

export default {
  components: {
    'Tasks': require('../components/Tasks/Tasks.vue').default,
    'add-task': require('../components/Modals/AddTask.vue').default,
    'Search': require('../components/Tools/Search').default,
    'Sort': require('../components/Tools/Sort').default
  },

  data () {
    return {
       showAddTask: false,
    }
  },

  mounted () {
    // Utilizando variáveis globais
    // O comando é enviado pelo componente noTasks.vue
    // @click="$root.$emit('showAddTask')"/>
    // Aquie é a propiedade $on verifica e utiliza a variavel glocal
    this.$root.$on('showAddTask', () =>{
      this.showAddTask = true
    })
  },

  computed: {

  },

  methods: {

  },

  filters: {

  },

  directives: {

  }
}
</script>

<style scoped>
  .q-scroll-task {
    display: flex;
    flex-grow: 1;
  }
</style>
