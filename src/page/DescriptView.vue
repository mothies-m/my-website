<template>
    <div>
        <div class="flex flex-col-reverse bottom-0 text-right w-full">
            <label class="text-white">Feeling lost try <button @click="showDescription = true" class="text-pink-200">Discriptive view</button></label>
        </div>
        <transition appear>
            <div class="absolute top-0 left-0 right-0 bottom-0 bg-white" v-if="showDescription" @click="showDescription = false"></div>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'DescriptView',
    data(){
        return {
            showDescription: false
        };
    }
}
</script>
<style> 
</style>
