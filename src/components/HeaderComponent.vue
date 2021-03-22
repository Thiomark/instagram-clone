<template>
    <q-header style="display: flex; justify-content: center;" bordered class="bg-white text-black q-py-xs">
        <q-toolbar class="nav-info">
            <img style="width: 9em;" src="logo.png" alt="logo" srcset="">
            <q-input 
                color="grey-5" 
                outlined dense
                class="input-width bg-grey-1"
                v-model="text" 
                placeholder="Search"
                @focus="readyToType" @blur="readyToType" @click="clearText" @input="searchTheUser"
            >
                <template v-slot:prepend>
                    <q-avatar>
                        <q-icon size="sm" name="search" />
                    </q-avatar>
                </template>
                <template v-slot:append>
                    <q-spinner-ios
                        v-if="lookingForTheUser"
                        color="grey-9"
                        size=".8em"
                    />
                    <q-icon v-if="!lookingForTheUser && canClearTextField" name="close" />
                </template>
            </q-input>
            <div>
                <q-btn round color="black"  @click="navigateTo('Home')" flat size="1.4em" icon="home" />
                <q-btn round color="black" flat size="1.4em" icon="send" />
                <NotificationButton />
                <AvatorButton />
            </div>
        </q-toolbar>
    </q-header>
</template>

<script>
   // <img src="/media/avatars/{{joke.avatar}}" alt="">
    import NotificationButton from './header/NotificationButton'
    import AvatorButton from './header/AvatorButton'
    export default {
        name: "HeaderComponent",
        components: {
            NotificationButton,
            AvatorButton
        },
        data() {
            return {
                canClearTextField: false,
                lookingForTheUser: false,
                text: ''
            }
        },
        methods: {
            readyToType(){
                this.canClearTextField = !this.canClearTextField
            }, 
            clearText(){
                this.text = ''
            }, 
            navigateTo(page){
                 this.$router.push({
                    name: page
                })
            },
            searchTheUser(){
                this.lookingForTheUser = true
                setTimeout(function(){
                    console.log('done')
                    this.lookingForTheUser = false
                }, 2000);
                
            }
        }
        
    }
</script>

<style lang="scss" scoped>

    .title {
        font-family: 'Redressed', cursive;
        font-size: 2.6em;
        font-weight: bold;
    }

    .input-width {
        width: 20em;
        border-radius: 4px;
    }

    .nav-info {
        display: flex;
        justify-content: space-between;
        max-width: 1190px;
    }

</style>