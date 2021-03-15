<template>
    <q-page class="q-py-lg">
        <div class="row">
            <section class=" col-md-8">
                <q-list>
                    <RecentPostComponent />
                    <RecentPostComponent />
                    <RecentPostComponent />
                    <RecentPostComponent />
                    <RecentPostComponent />
                    <RecentPostComponent />
                </q-list>
            </section>
            <section class="col bg-red content gt-sm">
                <h1>foll</h1>
            </section>
        </div>
    </q-page>
</template>

<script>
    import FollowersSection from '../components/followers/FollowersSection'
    import RecentPostComponent from '../components/home/RecentPostComponent'
    export default {
        name: 'Home',
        components: {
            FollowersSection,
            RecentPostComponent
        }
    }
</script>

<style scoped>

    .content {
        position: relative;
    }

    .follow-section {
        position: fixed;
    }


</style>
