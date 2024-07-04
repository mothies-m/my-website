<script>
export default {
    name: 'Terminal',
}
</script>

<template>
    <div class="flex flex-col text-wrap"> 
        <div>
            <p class="text-white" v-if="firstInput" v-html="banner"></p>
            <p class="whitespace-pre-line" v-html="value"></p>
        </div>
        <div>
            <p v-show="showInput" class="whitespace-pre-line"></p>
        </div>
        <div class="flex flex-row">
            <label class="w-20 text-red-200">User:$ ~</label>
            <input 
            type="text"
            v-model="cmd"
            class="text-pink-200"
            @keydown.enter="handleKeyDown"
            /> 
        </div>
            <DescriptView /> 
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { help, about, socials, skills, resume, web, projects, github, instagram, linkedin, banner ,gmail } from '../components/commands/command.js';
import DescriptView from './DescriptView.vue' 
let cmd = ref('');
let value = ref('');

let firstInput = ref(true)
let showInput = ref(false);

const handleKeyDown = (e) =>  {
  if (e.key === 'Enter') {
    let newOutput =`${value.value}`+'\n'+'<a class="text-red-200 mt-6">User@portfolio:$ ~</a>'+`${cmd.value}`+'\n';
    switch(cmd.value.toLocaleLowerCase().trim()){
        case "ls":
            newOutput += `<p class="text-blue-200 mt-6">This is not an real terminal.</p>`;
            break;
        case "pwd":
            newOutput += `<p class="text-blue-200 mt-6">There is real no directory.</p>`;
            break;
        case "clear":
            clearTerminal();
            newOutput = '';
            value.value = '';
            showInput = ref(true)
            firstInput = ref(false)
            break;
        case "help":
            newOutput += help;
            break;
        case "cd":
            newOutput += `<p class="text-blue-200 mt-6">There is real no directory.</p>`;
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
            newOutput += `<p class="text-blue-200 mt-6">Opening github...</p>`
            newTab(github)
            break; 
        case "linkedin":
            newOutput += `<p class="text-blue-200 mt-6">Opening linkedin...</p>`
            newTab(linkedin)
            break;
        case "gmail":
            newOutput += `<p class="text-blue-200 mt-6">Opening mailto:mothieswaran711@gmail.com</p>`
            newTab(gmail)
            break;
        case "instagram":
            newOutput += `<p class="text-blue-200 mt-6">Opening instagram...</p>`
            newTab(instagram)
            break;
        case "resume":
            newOutput += `<p class="text-blue-200 mt-6">Opening resume...</p>`
            newTab(resume)
            break;
        case "banner":
            newOutput += banner;
            break;
        case "":
            newOutput += "";
            break;
        default:
            newOutput += `<p class="text-blue-200 mt-6">There is no such command exist...type <a class="text-pink-200 text-shadow shadow-pink-800">'help'</a></p>`;
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
  font-family: monospace;
  background-color: #211D1B;
  color: #fdcaff;
  margin: 0;
  padding: 15px 20px;
  min-height: 99%;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
  overflow-x: hidden;
}
 p {
  display: block;
  line-height: 1.3em;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  letter-spacing: 0.05em;
  animation: typing 1s steps(80, end);
}
.no-animation{
    animation: typing 0 steps(80, end);
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
  animation: typing 1s steps(80, end);
}
</style>

