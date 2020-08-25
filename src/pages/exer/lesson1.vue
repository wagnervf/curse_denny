<template>

  <div>
    <q-page padding>
      <div class="form q-mb-lg">
        <div class="row q-mb-md">
          <label>Name:</label>
          <input
            type="text"
            v-autofocus
            v-model="name"
            :class="{ 'error' : isNameInvalid }"
          />
          <label
            class="error"
            v-show="isNameInvalid"
          >Please enter 15 characters or less</label>
        </div>
        <div class="row q-mb-md">
          <label>Age:</label>
          <input
            type="number"
            :class="{ 'error' : isAgeInvalid }"
            v-model="age"
          />
          <label
            class="error"
            v-show="isAgeInvalid"
          >Please enter an age between 1 - 100</label>
        </div>
        <div class="row">
          <button @click="generateRandom">Generate Random Person</button>
        </div>
      </div>
      <div
        class="description q-mb-lg"
        v-if="hasNameAndAge"
      >
        <p>
          My name is
          <b>{{name}}</b> and I'm
          <b>{{age}}</b> years old.
        </p>
        <p>
          In 10 years I will be
          <b>{{tenYearsLater}}</b>.
        </p>
        <p>
          My name is
          <b>{{name.length}}</b> characters long.
        </p>
        <p>
          My name in uppercase is
          <b>{{name | upperCase }}</b>.
        </p>
      </div>
      <div
        class="no-details"
        v-else
      >
        <p>Please enter a name and age.</p>
      </div>
    </q-page>
  </div>

</template>

<script>
export default {
  data () {
    return {
      name: "",
      age: "",
      names: ["Ravi", "Hasija", "Tom", "Sawyer"]
    };
  },
  directives: {
    autofocus: {
      inserted: function (el) {
        el.focus();
      }
    }
  },
  methods: {

    randomName () {
      const index = Math.floor(Math.random() * (3 - 0) + 0);
      this.name = this.names[index];
    },
    randomAge () {
      this.age = Math.floor(Math.random() * (100 - 1) + 1);
    },
    generateRandom () {
      this.randomName();
      this.randomAge();
    }
  },
  computed: {
    tenYearsLater () {
      return this.age !== null ? parseInt(this.age) + 10 : 0;
    },
    hasNameAndAge () {
      return this.name && this.age && this.name !== "" && this.age !== "";
    },
    isNameInvalid () {
      return this.name.length <= 0 || this.name.length > 15;
    },
    isAgeInvalid () {
      return this.age.length <= 0 || this.age < 1 || this.age > 100;
    }
  },
  filters: {
    upperCase: function (value) {
      return value.toUpperCase();
    }
  },
  mounted () {
    this.generateRandom();
  }
};
</script>

<style>
.form {
  background: #eee;
  padding: 10px;
}
label {
  min-width: 70px;
}
label.error {
  font-size: 13px;
  color: red;
  margin-left: 5px;
  margin-top: 3px;
}
input {
  border: 1px solid #ccc;
}
input.error {
  border: 1px solid red;
  background: pink;
}
.description {
  background: antiquewhite;
  padding: 20px 20px 7px;
}
.no-details {
  background: lightcoral;
  padding: 20px 20px 7px;
}
</style>