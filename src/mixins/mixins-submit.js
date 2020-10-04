export default {
	methods: {
		submitForm(){
	//set autofocus onde possui validade
		this.$refs.ModalTaskName.$refs.name.validade
		let formError = this.$refs.ModalTaskName.$refs.name.hasError
  		if(!formError){
  			this.submitTask()
		  }
  	},
	}
}