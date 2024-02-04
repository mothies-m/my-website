<script>
export default {
    name: 'Terminal',
}
</script>

<template>
    <div>
        <p>Welcome to my interative Terminal<a class="text-red-600">  :)</a></p>
        <p>Make yourself home, type <a class="text-red-600">help</a> to learn more..</p>
        <label class="float-left text-nowrap">~</label>
        <input
        type="text"
        v-model="cmd"
        @keydown.enter="handleKeyDown"
        />
        <div class="terminal">{{value}}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let cmd = ref('');
let value = ref('');

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    let newOutput =`${value.value}`+'\n'+'User@portfolio:$ ~'+`${cmd.value}`+'\n';
    switch(cmd.value){
        case "ls":
            newOutput += "lswfwag";
            break;
        case "pwd":
            newOutput += "Your termianl is cool";
            break;
        default:
            newOutput += "Unknown Command!!";
    }
     value.value = newOutput;
     cmd.value = '';
  }
};
</script>

<style>
body {
  background-color: #333;
  color: white;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
}

input {
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: white;
  width: 100%;
}

.terminal {
    color: white;
    white-space: pre-line; 
}
</style>

