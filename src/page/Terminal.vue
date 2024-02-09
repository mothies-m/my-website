<script>
export default {
    name: 'Terminal',
}
</script>

<template>
    <div class="flex flex-col w-full"> 
        <div id="main">
             <p class="whitespace-pre-line" v-html="value"></p>
        </div>
             <p v-show="showInput" class="whitespace-pre-line" v-html="value"></p>
        <div class="flex flex-row">
        <label class="w-40 text-red-200">User@portfolio:$ ~</label>
        <input 
        type="text"
        v-model="cmd"
        class="text-pink-200"
        @keydown.enter="handleKeyDown"
        /> 
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { help, about, socials, skills, resume, web, projects, github, instagram, linkedin, gmail } from '../components/commands/command.js'

let cmd = ref('');
let value = ref('');

let showInput = ref(false);

const handleKeyDown = (e) =>  {
  if (e.key === 'Enter') {
    let newOutput =`${value.value}`+'\n'+'<a class="text-red-200">User@portfolio:$ ~</a>'+`${cmd.value}`+'\n';
    switch(cmd.value){
        case "ls":
            newOutput += `<p class="text-blue-200">This is not an real terminal</p>`;
            break;
        case "pwd":
            newOutput += `<p class="text-blue-200">There is real no directory</p>`;
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
            newOutput += `<p class="text-blue-200">There is real no directory</p>`;
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
        case "web":
            newOutput += web;
            break;
        case "github":
            newOutput += `<p class="text-blue-200">Opening github...</p>`
            newTab(github)
            break; 
        case "linkedin":
            newOutput += `<p class="text-blue-200">Opening linkedin...</p>`
            newTab(linkedin)
            break;
        case "gmail":
            newOutput += `<p class="text-blue-200">Opening mailto:mothieswaran711@gmail.com</p>`
            newTab(gmail)
            break;
        case "instagram":
            newOutput += `<p class="text-blue-200">Opening instagram...</p>`
            newTab(instagram)
            break;
        case "resume":
            newOutput += `<p class="text-blue-200">Opening resume...</p>`
            newTab(resume)
            break;
        default:
            newOutput += `<p class="text-blue-200">There is no such command exist...type <a class="text-pink-200 text-shadow shadow-pink-800">'help'</a></p>`;
            break;
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

function newTab(link) {
  setTimeout(function() {
    window.open(link, "_blank");
  }, 500);
}
</script>

<style>
body {
  background-color: #211D1B;
  color: #fdcaff;
  height: 100vh;
  padding: 1rem;
  box-sizing: border-box;
  overflow: auto;
}
p {
  display: block;
  line-height: 1.3em;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.05em;
  animation: typing 0.5s steps(30, end);
}
.no-animation{
    animation: typing 0 steps(30, end);
}
@keyframes typing {
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
}
::selection {
  color: #211D1B;
  background-color: #fedeff;
}
::-moz-selection {
  color: #211D1B;
  background-color: #fedeff;
}
input {
  border: none;
  outline: none;
  background-color: #211D1B;
  color: whitesmoke;
  margin: 0;
  padding: 0;
  background-color: transparent;
  color: white;
  width: 100%;
}
</style>

