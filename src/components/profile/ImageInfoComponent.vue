<template>
    <q-dialog v-model="showImageInfoComponent" >
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
</template>

<script>
    export default {
        name: 'ImageInfoComponent',
        props: {
            showImageInfoComponent: {
                type: Boolean
            }
        },
        methods: {
            ghjk(){
                console.log('ghjk')
            }
        },
        watch: {
            type: (newType) => {
                if (newType === 1) {
                    this.removeDegree()
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>