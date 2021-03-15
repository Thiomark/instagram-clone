<template>
    <q-item clickable v-ripple :active="active">
        <q-item-section avatar>
            <q-avatar>
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
        </q-item-section>
        <q-item-section>
            <q-item-label lines="1">Photos</q-item-label>
        </q-item-section>
        <q-item-section side>
            <q-btn unelevated color="primary" label="Follow" />
        </q-item-section>
    </q-item>
</template>

<script>
    export default {
        name: 'FollowNotiComponent'
    }
</script>

<style lang="scss" scoped>

</style>