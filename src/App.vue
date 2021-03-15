<template>
    <div class="app">
        <q-layout view="hHh lpR fFf" class="max-width">
            <HeaderComponent />
            <q-page-container>
                <router-view />
            </q-page-container>

        </q-layout>
    </div>
</template>

<script>
    import HeaderComponent from './components/HeaderComponent'
    export default {
        name: 'LayoutDefault',

        components: {
            HeaderComponent
        },
        data () {
          return {
              right: false
          }
    }
}
</script>

<style scoped>
    .app {
        display: flex;
        justify-content: center;
    }

    .max-width {
         max-width: 1180px;
    }
</style>


