import Vue from 'vue'

//gerador de ID
import { uid } from 'quasar'

const state = {
	 tasks: {
	    'ID1': {
			name: 'Shop',
			completed: false,
			dueDate: '2019/03/12',
			dueTime: '18:30'
	    },
	  	  
	    'ID2': {
			name: 'Read',
			completed: true,
			dueDate: '2019/05/05',
			dueTime: '01:30'
	    },
	  	  
	    'ID3': {
			name: 'Eat',
			completed: false,
			dueDate: '2019/01/10',
			dueTime: '10:30'
	    }
	 }
}

const mutations = {
	UPDATE_TASK(state, payload){
		console.log(state, payload)
		// Recebe o objeto e atualiza o objeto referente ao ID
		// Object.assign() copia os valores de um objetos de origem para um objeto destino.

		Object.assign(state.tasks[payload.id], payload.updates)
		// ID1 {completede : true}
	},

	DELETE_TASK(state, id){
		//console.log('MUATIONS: ', id)
		//delete state.tasks[id]
		
		// forma de deletar que exclui em tempo real
		Vue.delete(state.tasks, id)
	},

	ADD_TASK(state, payload){
		Vue.set(state.tasks, payload.id, payload.task)
	}
}

const actions = {
	// Action é tulizada lá no @click e o Action Chama o Mutations que irá atualizar o states
	updateTask({ commit }, payload){
		commit('UPDATE_TASK', payload)

	},

	deleteTask({commit}, id){
		commit('DELETE_TASK', id)
	},

	addTask({commit}, task){
		//utilizando o geador de ID
		let taskId = uid()

		let payload = {
			id: taskId,
			task: task
		}

		commit('ADD_TASK', payload)
	}

}

const getters = {
	tasks: (state) => {
		return state.tasks
	},

	tasksNaoFinalizadas: (state) => {
		let tasks = {}
		//Object.keys() retorna um array cujo os elementos são strings correspondentes  enumerável encontrada diretamento sobre o objeto. 
		Object.keys(state.tasks).forEach(function(key) {
				//Retorna apenas as tarefas não completadas
				if(!state.tasks[key].completed){	
						tasks[key] = state.tasks[key]
				}
		})
		return tasks
	},

	tasksFinalizadas: (state) => {
		let tasks = {}
		//Object.keys() retorna um array cujo os elementos são strings correspondentes  enumerável encontrada diretamento sobre o objeto. 
		Object.keys(state.tasks).forEach(function(key) {
				//Retorna apenas as tarefas não completadas
				if(state.tasks[key].completed){	
						tasks[key] = state.tasks[key]
				}
		})
		return tasks
	}

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}