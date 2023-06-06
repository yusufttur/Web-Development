<template>
  <!--
  <div>{{ name }} {{ surname }} - {{ age }}</div>
  <br />
  <div>{{ fullName }}</div>
  <br />
  <div>
    <button v-on:click="increase">Increase</button>
    <button v-on:click="decrease">Decrease</button>
  </div>
  <br />
  <div>{{ counter }}</div>
  <br />
  <div>
    <input type="button" value="button" v-bind="inputValue" />
  </div> -->
  <div>
    <ul>
      <li v-for="(item, index) in courses" v-bind:key="index">{{ item }}</li>
    </ul>
  </div>

  <div>
    Username
    <br />
    <input id="username" type="text" v-model="user.username" />
    <br />
    Password
    <br />
    <input id="password" type="text" v-model="user.password" />
    <br />
    Password again
    <br />
    <input id="password" type="text" v-model="user.confirmpassword" />
  </div>

  <div class="list" v-if="user.password !== user.confirmpassword">
    Password must be matched!
  </div>

  <div>
    <button :disabled="user.username && user.password !== user.confirmpassword">
      Send
    </button>
  </div>
  <h2>InfoTechAcademy GPT</h2>
  <div>
    <input type="text" v-model="question" />
    <br />
    <input type="text" v-model="answer" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John',
      surname: 'Doe',
      age: '35',
      courses: ['vue', 'nodejs', 'html', 'js'],
      user: {
        username: '',
        password: '1234',
      },
      counter: 0,
      inputValue: 'Click me!',
      question: '',
      answer: '',
    };
  },
  computed: {
    fullName() {
      return `${this.name} ${this.surname} -- ${this.age}`;
    },
  },
  methods: {
    increase() {
      console.log('button has pressed');
      this.counter++;
    },
    decrease() {
      console.log('button has pressed');
      this.counter--;
    },
  },
  watch: {
    question(newValue, oldValue) {
      console.log({ newValue });
      console.log({ oldValue });
      this.answer = newValue == '' ? '' : "I'm waiting for your input.";
    },
  },
};
</script>

<style></style>
