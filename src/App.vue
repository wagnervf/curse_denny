<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {
 // name: 'App'

 methods : {
 	...mapActions('settings', ['getSettingsLocalStorage'])
 },

//Iniciando uma Action da Store
mounted(){
	this.getSettingsLocalStorage()
}

}
</script>

<style>
	.text-riscado{
		text-decoration: line-through;
	}
</style>