<template>
    <section class="q-pt-lg followers-section">
        <q-list>
            <q-item >
                <q-item-section avatar>
                    <q-avatar size="80px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label lines="1">Thiomark</q-item-label>
                    <q-item-label caption lines="2">Thio</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-btn no-caps flat rounded color="primary" label="Switch" />
                </q-item-section>
            </q-item>
            <br>
            <div class="see-all q-px-md">
                <q-item-label class="text-grey-6 sell-all-text">Suggest For You</q-item-label>
                <q-btn no-caps flat rounded color="grey-9" label="See All" />
            </div>
            <br>
            <q-item >
                <q-item-section avatar>
                    <q-avatar size="50px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label lines="1">Thiomark</q-item-label>
                    <q-item-label caption lines="2">Suggested for you</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-btn no-caps flat rounded color="primary" label="Follow" />
                </q-item-section>
            </q-item>
            <q-item >
                <q-item-section avatar>
                    <q-avatar size="50px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label lines="1">Thiomark</q-item-label>
                    <q-item-label caption lines="2">Suggested for you</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-btn no-caps flat rounded color="primary" label="Follow" />
                </q-item-section>
            </q-item>
            <q-item >
                <q-item-section avatar>
                    <q-avatar size="50px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label lines="1">Thiomark</q-item-label>
                    <q-item-label caption lines="2">Suggested for you</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-btn no-caps flat rounded color="primary" label="Follow" />
                </q-item-section>
            </q-item>
            <q-item >
                <q-item-section avatar>
                    <q-avatar size="50px">
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                    </q-avatar>
                </q-item-section>
                <q-item-section>
                    <q-item-label lines="1">Thiomark</q-item-label>
                    <q-item-label caption lines="2">Suggested for you</q-item-label>
                </q-item-section>
                <q-item-section side>
                    <q-btn no-caps flat rounded color="primary" label="Follow" />
                </q-item-section>
            </q-item>
        </q-list>
    </section>
</template>

<script>
    export default {
        name : 'FollowersSection'
    }
</script>

<style lang="scss" scoped>
    .followers-section {
        min-width: 380px;
    }

    .see-all {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .sell-all-text {
            font-size: 1.2em;
            font-weight: bold;
        }
    }

</style>