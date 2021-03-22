<template>
    <div class="status-component">
        <q-btn @click="swipeLeft" round size=".9em" color="primary" class="scroll-buttons leftButton" icon="keyboard_arrow_left" />
        <div class="center" id="content" ref="content">
            <StatusAvatar v-for="(item, index) in stories" 
                :key="index"
                :username="item.username"
                :imageUrl="item.imageURL"
            />
        </div>
        <q-btn @click="swipeRight" round size=".9em" color="primary" class="scroll-buttons rightButton" icon="keyboard_arrow_right" />
    </div>
</template>

<script>

    import StatusAvatar from './StatusAvatar'
    export default {
        name: "StatusComponent",
        components: {
            StatusAvatar
        },
        data() {
            return {
                stories: [
                    {username: 'itumeleng 1', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 2', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 3', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 4', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 5', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 6', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 7', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 8', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 9', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                    {username: 'itumeleng 10', imageURL: 'https://cdn.quasar.dev/img/avatar.png'},
                ]
            }
        },
        methods: {
            scrollTo(element, scrollPixels, duration) {

                const scrollPos = element.scrollLeft;

                if ( !( (scrollPos === 0 || scrollPixels > 0) && (element.clientWidth + scrollPos === element.scrollWidth || scrollPixels < 0))) {

                    const startTime =
                    "now" in window.performance
                        ? performance.now()
                        : new Date().getTime();
                    
                    function scroll(timestamp) {

                        const timeElapsed = timestamp - startTime;
                        const progress = Math.min(timeElapsed / duration, 1);
                        element.scrollLeft = scrollPos + scrollPixels * progress;
                        if (timeElapsed < duration) {
                            window.requestAnimationFrame(scroll);
                        } else {
                            return;
                        }
                    }
                    window.requestAnimationFrame(scroll);
                }
            },
            swipeLeft() {
                const content = this.$refs.content;
                this.scrollTo(content, -300, 200);
            },
            swipeRight() {
                const content = this.$refs.content;
                this.scrollTo(content, 300, 200);
            }
        }
    }
</script>

<style lang="scss" scoped>

    
    .status-component {
        border: 1px solid rgb(212, 212, 212);
        padding: 1.3em 0;
        position: relative;
        height: 150px;
        border-radius: .3em;
    }

    .scroll-buttons {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
    }

    .rightButton {
        right: .2em;
    }
    
    .leftButton {
        left: .2em;
    }

    .center{
        float: left; 
        max-width: 100%;
        overflow: hidden;
        white-space: nowrap;
    }

</style>