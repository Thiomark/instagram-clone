<template>
    <div class="status-avatar">
        <div class="status-avatar-wrapper">
            <div @click="openSelectedStory" class="gradient-background">
                <div class="gradient-border">
                    <q-avatar class="story q-mx-sm" size="80px">
                        <img :src="imageUrl">
                    </q-avatar>
                </div>
            </div>
            <q-item-label @click="openSelectedStory" class="avatar-username text-weight-light">{{username}}</q-item-label>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'status-avatar',
        props: {
            username: {
                type: String
            },
            imageUrl: {
                type: String
            }
        },
        methods: {
            openSelectedStory(){
                console.log('Status opended')
            }
        }
    }
</script>

<style lang="scss" scoped>

    .status-avatar {
        height: 100%;
        width: 120px;
        display: inline-block;

        .status-avatar-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;

            .avatar-username {
                font-size: .9rem;
                margin-top: .4em;
                cursor: pointer;
            }

            .gradient-background {
                cursor: pointer;
                width: 90px;
                height: 90px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: linear-gradient(to left, #d53a9d, #da8a12);

                .gradient-border {
                    width: 95%;
                    height: 95%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: white;
                }
            }
        }
    }

</style>