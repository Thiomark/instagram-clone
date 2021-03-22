const state = {
    user: null
}

const mutations = {
    addUser(state, payload){
        state.user = payload
    }
}

const actions = {
    fetchUser({commit}){
        const user = {
            name: 'Itumeleng Tsoela',
            verified: true,
            username: 'thiomark',
            followers: 1234,
            following: 234,
            bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error eum quo suscipit distinctio delectus blanditiis. Quia expedita odit magni tempora!',
            posts: [
                {imageID: '1', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 52, numberOfComments: 9},
                {imageID: '2', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 72, numberOfComments: 7},
                {imageID: '3', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 12, numberOfComments: 6},
                {imageID: '4', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 32, numberOfComments: 12},
                {imageID: '5', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 18, numberOfComments: 2},
                {imageID: '6', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 12, numberOfComments: 4},
                {imageID: '7', imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg', numberOfLikes: 14, numberOfComments: 3},
            ]
        }
        commit('addUser', user)
    }
}

const getters = {
    getUser: state => state.popupAlert
}

export default {
    state,
    mutations,
    actions,
    getters
}

