<template>
    <q-page class="q-py-lg q-px-md">
        <ImageInfoComponent :showImageInfoComponent="showImageInfoComponent" />
        <section class="row center-avatar q-my-lg">
            <div class="col-4 center-avatar">
                <q-avatar size="15em">
                    <img src="https://cdn.quasar.dev/img/avatar.png">
                </q-avatar>
            </div>
            <div class="col-8 q-my-lg">
                <div class="info row">
                    <div class="top-section col-12">
                        <q-item-label class="text-h4 text-weight-light text-grey-8">Thiomark</q-item-label>
                        <q-btn class="q-mx-lg q-px-lg" no-caps size="1.2em" outline color="grey-6" label="Edit Profile" />
                        <q-btn round color="grey-9" size="1.3em" flat icon="settings" />
                    </div>
                    <div class="top-section col-12 q-my-lg">
                        <q-item-label class="text-h5"><span class="q-mr-md text-grey-8">posts</span>12</q-item-label>     
                        <q-item-label class="text-h5 q-mx-lg"><span class="q-mr-md text-grey-8">followers</span>12</q-item-label>     
                        <q-item-label class="text-h5"><span class="q-mr-md text-grey-8">following</span>12</q-item-label>     
                    </div>
                    <p class="text-body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum quo suscipit distinctio delectus blanditiis. Quia expedita odit magni tempora!</p>
                </div>
            </div>
        </section>
        <q-tabs
            v-model="tab"
            inline-label
            switch-indicator
            indicator-color="grey-9"
        >
            <q-tab class="q-py-md" name="posts" icon="window" label="Posts" />
            <q-tab class="q-py-md" name="saved" icon="bookmark_border" label="Saved" />
            <q-tab class="q-py-md" name="tagged" icon="sell" label="Tagged" />
        </q-tabs>
        <section class="images" v-if="tab === 'posts'">
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
            <PostedImage @showimageinfo="showImageInfo"/>
        </section>
    </q-page>
</template>

<script>
    import PostedImage from '../components/profile/PostedImage'
    import ImageInfoComponent from '../components/profile/ImageInfoComponent'

    export default {
        name: 'ProfileScreen',
        components: {
            PostedImage,
            ImageInfoComponent
        },
        data() {
            return {
                tab: 'posts',
                showImageInfoComponent: false
            }
        },       
        methods: {
            showImageInfo(){
                this.showImageInfoComponent = true
            },
            closeImageInfo(){
                this.showImageInfoComponent = false
            }
        }
    }
</script>

<style scoped>
    .images {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2em;
    }

    .center-avatar {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .top-section {
        display: flex;
        align-items: center;
    }

</style>
