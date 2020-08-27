import Vue from 'vue'

//gerador de ID
import { uid } from 'quasar'

const state = {
	 tasks: {
	    'ID1': {
			name: 'All',
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
	 },

	 search: '',
	 sort: 'name'
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
	},

	SET_SEARCH(state, value){
		state.search = value
	},

	SET_SORT(state, value){
		state.sort = value
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
	},

	setSearch({ commit }, value) {
		commit('SET_SEARCH', value)
	},

	setSort({ commit }, value) {
		commit('SET_SORT', value)
	}

}

const getters = {
	// Ordenacao das tarefas

	tasksSorted: (state) => {
		let tasksSorted = {}
		let keysOrdered = Object.keys(state.tasks)

		keysOrdered.sort((a,b) => {

			let taskA = state.tasks[a][state.sort].toLowerCase()
			let taskB = state.tasks[b][state.sort].toLowerCase()

				if( taskA > taskB ) return 1
					else if (taskA < taskB) return -1
						else return 0
		})

		keysOrdered.forEach((key) =>{
			tasksSorted[key] = state.tasks[key]
		})

		return tasksSorted
	},



	//Filtrando o objeto
	tasksFiltered: (state, getters) => {
		let tasksSorted = getters.tasksSorted
		let tasksFiltered = {}
		
		if(state.search){
			Object.keys(tasksSorted).forEach(function(key) {
				let task = tasksSorted[key]
				
				if(task.name.toLowerCase().includes(state.search.toLowerCase())) {
					tasksFiltered[key] = task
				}
			})
			return tasksFiltered
		}
			return tasksSorted
	},

	tasksNaoFinalizadas: (state, getters) => {
		//Recebendo os valores filtrados
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		//Object.keys() retorna um array cujo os elementos são strings correspondentes  enumerável encontrada diretamento sobre o objeto. 
		Object.keys(tasksFiltered).forEach(function(key) {
				//Retorna apenas as tarefas não completadas
				if(!tasksFiltered[key].completed){	
						tasks[key] = state.tasks[key]
				}
		})
		return tasks
	},

	tasksFinalizadas: (state, getters) => {
		//Recebendo os valores filtrados
		let tasksFiltered = getters.tasksFiltered
		let tasks = {}
		//Object.keys() retorna um array cujo os elementos são strings correspondentes  enumerável encontrada diretamento sobre o objeto. 
		Object.keys(tasksFiltered).forEach(function(key) {
				//Retorna apenas as tarefas não completadas
				if(tasksFiltered[key].completed){	
						tasks[key] = state.tasks[key]
				}
		})
		return tasks
	},


	tasks: (state) => {
		return state.tasks
	}

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}