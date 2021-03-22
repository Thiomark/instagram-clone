const state = {
    popupAlert: null
}

const mutations = {
    showAlert(state, payload){
        state.popupAlert = payload
    }
}

const actions = {
    
}

const getters = {
    getPopupAlert: state => state.popupAlert
}

export default {
    state,
    mutations,
    actions,
    getters
}








