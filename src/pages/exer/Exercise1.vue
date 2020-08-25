<template>
  <!--
	Awesome Exercise 2 - Vue.js Lists & Components

	4) Create a child component and use it to display each of your items (don't use the components/Solution/Food.vue file)
	5) Add unique id's to the food array for each item, and apply these to a :key property on your v-for loop

	-->
  <q-page padding>
    <div class="q-pa-md row items-stretch">

      <div
        class="card shadow-1"
        v-for="(food, index) in foods"
        :key='index'
      >
        <img
          :src="food.url"
          width="198"
          height="180"
        >
        <div class="card-content">
          <h1 class="text-primary">{{food.name}}</h1>
          <p>{{food.description}}</p>
          <p>
            <small>
              <b>Delicousness</b>
            </small>
            <b class="text-primary">
              {{food.deliciousness}}
            </b>
          </p>
        </div>
      </div>

    </div>

    <q-btn @click="newFood">New</q-btn>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      foods: [
        {
          url: 'https://i.imgur.com/0umadnY.jpg',
          name: 'Burger',
          description: 'A burger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun.',
          deliciousness: '4/5'
        },
        {
          url: 'https://i.imgur.com/b9zDbyb.jpg',
          name: 'Pizza',
          description: 'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough.',
          deliciousness: '5/5'
        },
        {
          url: 'https://i.imgur.com/RbKjUjB.jpg',
          name: 'Sprouts',
          description: 'The Brussels sprout is a member of the Gemmifera Group of cabbages, grown for its edible buds.',
          deliciousness: '1/5'
        }
      ],
      food: {
        url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg',
        name: 'Peixe',
        description: 'Peixe assado muito bom',
        deliciousness: '1/5'
      }

    }
  },

  methods: {
    newFood () {

      this.foods.push(this.food)
    }
  }
}
</script>

<style>
.card {
  flex-basis: 210px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.card img {
  max-width: 100%;
}
.card-content {
  padding: 0 10px;
}
h1 {
  font-size: 23px;
}
p {
  font-size: 14px;
}
</style>
