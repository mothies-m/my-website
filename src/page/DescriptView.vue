<template>
    <div>
        <div class="flex flex-col-reverse bottom-0 text-right w-full">
            <label class="text-white">Feeling lost try <button @click="showDescription = true" class="text-pink-200 animate-pulse text-shadow shadow-pink-900">Discriptive view</button></label>
        </div>
        <transition appear>
        <div class="fixed cursor-pointer top-4 left-6 right-20 bottom-4 rounded-l border-white bg-sky-900" v-if="showDescription">
            <div class="absolute cursor-pointer top-[10px] left-[10px] right-[10px] bottom-[10px] border-white border bg-sky-900 overflow-y-auto">
                <div class="flex flex-row justify-between">
                    <p class="pl-2 pt-2 text-white underline underline-offset-2">About</p>
                    <button class="text-xl text-white font-extralight pr-2"  @click="showDescription = false">X</button>
                </div>
                <div class="p-2" v-html="about"></div>
                <p class="pl-2 text-white underline underline-offset-2">Socials</p>
                <div class="p-2" v-html="socials"></div>
                <p class="pl-2 text-white underline underline-offset-2">Skills</p>
                <div class="p-2" v-html="skills"></div>
                <p class="pl-2 text-white underline underline-offset-2">Web</p>
                <div class="p-2" v-html="web"></div>
                <p class="pl-2 text-white underline underline-offset-2">Projects</p>
                <div class="p-2" v-html="projects"></div>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
    import { about, socials, skills, web, projects } from '../components/commands/command.js';
export default {
    name: 'DescriptView',
    data(){
        return { 
            showDescription: false,
            about,
            socials,
            skills,
            web,
            projects,
        };
    }
}
</script>
<style> 
</style>
