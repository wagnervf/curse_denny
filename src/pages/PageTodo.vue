<template>
  <q-page class="q-pa-md">
   
    <Tasks />

     <div class="absolute-bottom text-center q-mb-lg">
       <q-btn
      round
      color="primary"
      size="24px"
      icon="add"
      @click="showAddTask = true"
    />
     </div>   
   
    <q-dialog v-model="showAddTask">
      <add-task @fechando="showAddTask = false" />
    </q-dialog>

  </q-page>
</template>

<script>

export default {
  components: {
    'Tasks': require('../components/Tasks/Tasks.vue').default,
    'add-task': require('../components/Modals/AddTask.vue').default
  },

  data () {
    return {
       showAddTask: false,
    }
  },

  mounted () {

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
</style>
