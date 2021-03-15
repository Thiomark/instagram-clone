<template>
    <q-header style="display: flex; justify-content: center;" bordered class="bg-white text-black">
        <q-toolbar class="nav-info q-my-sm">
            <q-toolbar-title class="title">Instogram</q-toolbar-title>
            <q-input square outlined v-model="text" dense placeholder="Search" />
            <div>
                <q-btn round color="black" flat icon="home" />
                <q-btn round color="black" flat icon="send" />
                <NotificationButton />
                <AvatorButton />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script>
    import NotificationButton from './header/NotificationButton'
    import AvatorButton from './header/AvatorButton'
    export default {
        name: "HeaderComponent",
        components: {
            NotificationButton,
            AvatorButton
        }
        
    }
</script>

<style lang="scss" scoped>

    .title {
        font-family: 'Pacifico', cursive;
        font-size: 2em;
    }

    .nav-info {
        display: flex;
        justify-content: space-evenly;
        max-width: 1180px
    }

</style>