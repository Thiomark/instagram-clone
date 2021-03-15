<template>
    <q-item class="recent-post-component">
        <div top class="post-header q-mx-md">
            <div class="left-side">
                <q-item-section avatar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label>Itumeleng</q-item-label>
                </q-item-section>
            </div>
            <q-btn round color="black" flat size="1.3em" icon="more_horiz" />
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
                <q-btn round color="primary" flat label="Post" />
            </template>
        </q-input>
    </q-item>
</template>

<script>
    export default {
        name: 'RecentPostComponent'
    }
</script>

<style lang="scss" scoped>

    .recent-post-component {
        border: 1px solid rgba(190, 190, 190, 0.562);
        max-width: 700px;
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 1.4em 0 3em;
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