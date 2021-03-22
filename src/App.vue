<template>
    <div class="app">
        <q-dialog v-if="getPopupAlert" v-model="toolbar">
            <q-card>
                <q-toolbar>
                    <q-avatar>
                        <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
                    </q-avatar>

                    <q-toolbar-title><span class="text-weight-bold">Quasar</span> Framework</q-toolbar-title>

                    <q-btn flat round dense icon="close" v-close-popup />
                </q-toolbar>

                <q-card-section>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
                </q-card-section>
            </q-card>
        </q-dialog>
        <q-layout view="hHh lpR fff" class="max-width">
            <HeaderComponent />
            <q-page-container>
                <router-view />
            </q-page-container>
        </q-layout>
        <footer>
            <div class="top-section">
                <a href="javascript:void(0);">About</a>
                <a href="javascript:void(0);">Blog</a>
                <a href="javascript:void(0);">Jobs</a>
                <a href="javascript:void(0);">Help</a>
                <a href="javascript:void(0);">API</a>
                <a href="javascript:void(0);">Privacy</a>
                <a href="javascript:void(0);">Terms</a>
                <a href="javascript:void(0);">Top accounts</a>
                <a href="javascript:void(0);">Hashtags</a>
                <a href="javascript:void(0);">Location</a>
            </div>
            <a href="javascript:void(0);">&#169; 2021 Instogram NOT from Facebook</a>
        </footer>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex'
    import HeaderComponent from './components/HeaderComponent'
    export default {
        name: 'LayoutDefault',

        components: {
            HeaderComponent
        },
        data () {
            return {
                right: false,
                toolbar: true
            }
        },
        computed: {
            ...mapGetters(['getPopupAlert']),
        }
    }
</script>

<style lang="scss" scoped>

    * {
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
                box-sizing: border-box;
        outline: none;
        text-decoration: none;
    }
    .app {
        display: flex;
        align-items: center;
        background-color: #fafafa;
        flex-direction: column;
    }

    footer {
        margin: 3em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        a {
            color: rgb(156, 156, 156);
            text-decoration: none;
            margin: 1em;
            font-size: 1rem;
        }
    }

    .max-width {
         max-width: 1190px;
    }
</style>


