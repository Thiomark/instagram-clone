<template>
    <q-btn round color="black" flat icon="favorite_border" >
        <q-menu auto-close fit>
                <q-list style="min-width: 380px" class="q-mr-md">
                    <FollowNotiComponent />
                    <FollowNotiComponent />
                    <FollowNotiComponent />
                    <FollowNotiComponent />
                    <FollowNotiComponent />
                    <FollowNotiComponent />
                </q-list>
        </q-menu>
    </q-btn>
</template>

<script>
    import FollowNotiComponent from './FollowNotiComponent'
    export default {
        name: 'NotificationButton',
        components: {
            FollowNotiComponent
        }
        
    }
</script>

<style lang="scss" scoped>

</style>