import Vue from 'vue'
import { LocalStorage } from 'quasar'


const state = {
	settings: {
		show12Hours: false,
		showTasksInOneList: false
	}
}

const mutations = {
	UPDATE_SHOW12HOURS(state, value){
			state.settings.show12Hours = value
	},

	UPDATE_SHOWLIST(state, value){
			state.settings.showTasksInOneList = value
	},

	UPDATE_SETTINGS_STORAGE(state, settings){
		//Atualizando as settings com base nos valores do local storage
		Object.assign(state.settings, settings)
	}

}

const actions = {
		updateShow12Hours({ commit, dispatch }, value) {
				commit('UPDATE_SHOW12HOURS', value)

				// Adcionar item em Application/Local Store JavaScript
				//localStorage.setItem('show12Hours', value)

				dispatch('setLocalStorageQuasar')

		},

		updateShowTasksInOneList({ commit, dispatch }, value) {
				commit('UPDATE_SHOWLIST', value)

					// Adcionar item em Application/Local Store JavaScript
				//localStorage.setItem('showOneList', value)

				dispatch('setLocalStorageQuasar')

		},


		setLocalStorageQuasar({ state }){
				// Adcionar item em Application/Local Store Quasar
				LocalStorage.set('settings', state.settings)
		},


				//Busca items do Local Storage usando métodos do quasar
		getSettingsLocalStorage({ commit }) {
			let settingsStorage = LocalStorage.getItem('settings')

			if(settingsStorage){
				commit('UPDATE_SETTINGS_STORAGE', settingsStorage)
			}

		}


}

const getters = {
	getSettings: state => {
		return state.settings
	}

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}