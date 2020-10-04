<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>Configurações</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side >
          <q-toggle color="blue" v-model="show12Hours" val="battery" />
        </q-item-section>
      </q-item>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in on list</q-item-label>
        </q-item-section>
        <q-item-section side >
        </q-item-section>
      </q-item>

       
      
    </q-list>   

    <q-list bordered padding>
      <q-item-label header>More</q-item-label>
        <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name=chevron_right></q-icon>
        </q-item-section>
      </q-item>
    </q-list>



  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {

  components: {
    //'Task': require('../components/Task.vue').default
  },
  data () {
    return {
        }
  },

  mounted () {},

  computed: {
    ...mapGetters('settings', ['getSettings']),

     show12Hours:{
        get() {
           return this.getSettings.show12Hours
        },
        set(value){
          console.log(value)
          //Actions stores
            this.updateShow12Hours(value)
        }
     },

     showTasksOneList:{
        get() {
           return this.getSettings.showTasksInOneList
        },
        set(value){
          console.log(value)
          //Actions stores
            this.updateShowTasksInOneList(value)
        }
     },




  },

  methods: {
      ...mapActions('settings', ['updateShow12Hours', 'updateShowTasksInOneList'])
  },

  filters: {

  },

  directives: {

  }
}
</script>
