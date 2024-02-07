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
            <p class="terminal" v-html="value"></p>
        </div>
             <p v-show="showInput" class="terminal" v-html="value"></p>
        <div class="flex flex-row">
        <label class="w-40">User@portfolio:$ ~</label>
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
import { help, about, socials, skills, resume, web, projects } from '../components/commands/command.js'

let cmd = ref('');
let value = ref('');

let showInput = ref(false);

const handleKeyDown = (e) =>  {
  if (e.key === 'Enter') {
    let newOutput =`${value.value}`+'\n'+'User@portfolio:$ ~'+`${cmd.value}`+'\n';
    switch(cmd.value){
        case "ls":
            newOutput += "This is not an real terminal🫸";
            break;
        case "pwd":
            newOutput += "There is real no directory🫸";
            break;
        case "clear":
            clearTerminal();
            newOutput = '';
            value.value = '';
            showInput = ref(true)
            break;
        case "help":
            newOutput += help;
            break;
        case "cd":
            newOutput += "There is real no directory🫸";
            break;
        case "about":
            newOutput += about;
            break;
        case "socials":
            newOutput += socials;
            break;
        case "skills":
            newOutput += skills;
            break;
        case "projects":
            newOutput += projects;
            break;
        case "resume":
            newOutput += resume;
            break;
        case "web":
            newOutput += web;
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
  overflow: auto;
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

