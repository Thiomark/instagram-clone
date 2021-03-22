<template>
    <q-item style="background-color: white;" class="recent-post-component">
        <div top class="post-header q-mx-md q-my-md">
            <div @click="navigateTo('/1')" style="cursor: pointer;" class="left-side">
                <q-item-section avatar>
                    <q-avatar size="3em">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section >
                    <q-item-label class="username text-weight-medium text-grey-9">Itumeleng</q-item-label>
                </q-item-section>
            </div>
            <q-btn @click="showPopUP" round color="black" flat size="1.1em" icon="more_horiz" />
        </div>
        <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            style="width: 100%"
            >
        </q-img>
        <div top class="post-header q-mx-md">
            <div class="left-side">
                <q-btn round color="black" flat icon="favorite_border" />
                <q-btn round color="black" flat icon="chat_bubble_outline" />
                <q-btn round color="black" style=" transform: rotate(-40deg);" flat icon="send" />
            </div>
            <q-btn round color="black" flat size="1.3em" icon="bookmark_border" />
        </div>
        <div>
            <label for="likes" class="q-mx-lg">46 likes</label>
        </div>
        <q-input class="q-mx-lg q-mt-lg top-border" borderless v-model="text" placeholder="Add a comment..." >
            <template v-slot:prepend>
                <q-icon name="sentiment_satisfied" />
            </template>
            <template v-slot:after>
                <q-btn round color="primary" flat label="Post" :disable="!text" />
            </template>
        </q-input>
    </q-item>
</template>

<script>

    import {mapMutations} from 'vuex'
    export default {
        name: 'RecentPostComponent',
        data() {
            return {
                text: ''
            }
        },
        methods: {
            ...mapMutations(['showAlert']),
            showPopUP(){
                this.showAlert(true)
            },
            navigateTo(page){
                 this.$router.push({
                    path: page
                })
            },
        }
    }
</script>

<style lang="scss" scoped>

    .username {
        font-size: 1.37em;
    }

    .recent-post-component {
        border: 1px solid rgba(190, 190, 190, 0.562);
        max-width: 750px;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 1.4em 0 3em;
        border-radius: .3em;
    }

    .top-border {
        border-top: solid rgb(221, 221, 221) 1px;
    }

    .left-side {
        display: flex;
    }
    .post-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
    }
</style>