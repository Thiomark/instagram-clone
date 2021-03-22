<template>
    <q-avatar class="q-ml-md" style="cursor: pointer;" size="2.4em">
        <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
            <q-menu auto-close>
            <q-list style="min-width: 170px" class="q-mr-md">
                <q-item clickable v-ripple >
                    <q-item-section avatar>
                        <q-icon name="perm_identity" />
                    </q-item-section>
                    <q-item-section>Profile</q-item-section>
                </q-item>
                <q-item clickable v-ripple >
                    <q-item-section avatar>
                        <q-icon name="turned_in_not" />
                    </q-item-section>
                    <q-item-section>Saved</q-item-section>
                </q-item>
                <q-item clickable v-ripple >
                    <q-item-section avatar>
                        <q-icon name="settings" />
                    </q-item-section>
                    <q-item-section>Settings</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable>
                    <q-item-section>Log Out</q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </q-avatar>
</template>

<script>
    export default {
        name: 'AvatorButton'
    }
</script>

<style lang="scss" scoped>

</style>