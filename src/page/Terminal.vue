<script>
export default {
    name: 'Terminal',
}
</script>

<template>
    <div class="flex flex-col w-full"> 
        <div id="main">
             <p>Welcome to my interative Terminal<a class="text-red-600">  :)</a></p>
            <p>Make yourself home, type <a class="text-red-600">help</a> to learn more..</p>
            <p class="terminal">{{value}}</p>
        </div>
        <div class="flex flex-row">
        <label class="w-44">User@portfolio:$ ~</label>
        <input
        type="text"
        v-model="cmd"
        @keydown.enter="handleKeyDown"
        />
        </div>

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
        case "clear":
            clearTerminal(); 
            break;
        default:
            newOutput += "Unknown Command";
    }
     value.value = newOutput;
     cmd.value = '';
  }
};
const clearTerminal = () => {
    const terminalElement = document.getElementById('main');
    if (terminalElement) {
      terminalElement.innerHTML = '';
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

