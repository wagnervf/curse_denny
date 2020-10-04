export default {
	methods: {
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