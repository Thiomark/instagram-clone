<template>
    <q-page class="q-py-lg q-px-md">
        <div class="row justify-center">
            <section class=" col-md-8 q-py-lg">
                <div style="max-width: 750px; background-color: white;">
                    <StatusComponent />
                </div>
                <div class="q-py-md">
                    <q-list>
                        <RecentPostComponent />
                        <RecentPostComponent />
                        <RecentPostComponent />
                        <RecentPostComponent />
                        <RecentPostComponent />
                        <RecentPostComponent />
                    </q-list>
                </div>
            </section>
            <section class="col content gt-md">
                <FollowersSection class="follow-section " />
            </section>
        </div>
    </q-page>
</template>

<script>
    
    import StatusComponent from '../components/home/StatusComponent'
    import FollowersSection from '../components/followers/FollowersSection'
    import RecentPostComponent from '../components/home/RecentPostComponent'
    
    export default {
        name: 'Home',
        components: {
            FollowersSection,
            RecentPostComponent,
            StatusComponent
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

    .center-cols {
        
    }

    /* @media screen and (min-width: 1000px) {
  
        .follow-section {
            display: none;
        }
    }

    @media screen and (min-width: 1000px) {
  
        .follow-section {
            display: none;
        }
    } */


</style>
