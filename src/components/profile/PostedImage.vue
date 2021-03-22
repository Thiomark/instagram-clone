<template>
    <q-img
        @mouseleave="showIcons"
        @mouseenter="showIcons"
        @click="ShowImageInfo"
        class="col image"
        :ratio="1"
        src="https://cdn.quasar.dev/img/parallax2.jpg"
        style="width: 100%; cursor: pointer;"
    >
        <div v-if="showImageIcons" class="absolute-full text-subtitle2 flex flex-center">
            <q-btn round flat class="q-ma-md" color="white" icon="fas fa-heart" />
            <q-btn round flat class="q-ma-md" color="white" icon="fas fa-comment" />
        </div>
    </q-img>
</template>

<script>
    export default {
        name: 'PostedImage',
        data() {
            return {
                showImageIcons: false
            }
        },
        methods: {
            showIcons(){
                this.showImageIcons = !this.showImageIcons
            },
            ShowImageInfo(){
                this.$emit('showimageinfo', {name: 'hdh'})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>