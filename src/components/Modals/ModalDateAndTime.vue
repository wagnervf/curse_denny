<template>
	<div>
		<div class="row q-pa-sm">
		<q-input 
			outlined 
			:value="DueDate" 
			label="Due Date"
			clearable
			@input="$emit('update:DueDate', $event)"
			>
		<template v-slot:append>
		<q-icon name="event" class="cursor-pointer">
		  <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
		    <q-date 
		      :value="DueDate" 
		       
		       @input="$emit('update:DueDate', $event)" />
		  </q-popup-proxy>
		</q-icon>
		</template>
		</q-input>
	</div>

	<div class="row q-pa-sm">
	 <q-input
	   outlined 
	   :value="DueTime" 
	   label="Due Time"
	   @input="$emit('update:DueTime', $event)"
			
	   >
		<template v-slot:append>
		  <q-icon 
		  	name="access_time" 
		  	class="cursor-pointer"
		  	@click="$emit('update:DueTime', '')"
		  	>
		    <q-popup-proxy transition-show="scale" transition-hide="scale">
		      <q-time 
		      	:value="DueTime"
		      	@input="$emit('update:DueTime', $event)"
		      />
		    </q-popup-proxy>
		  </q-icon>
		</template>
		</q-input>
	</div>	
	</div>
</template>

<script>	
  export default {

   props: ['DueDate','DueTime']

  }

</script>