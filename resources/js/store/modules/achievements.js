let state = {
    achievements: null,

};

let getters = {
    ACHIEVEMENTS: state => {
        return state.achievements;
    },

};

let mutations = {
    SET_ACHIEVEMENTS: (state, payload) => {
        state.achievements = payload;
    },

};

let actions = {
    loadAchievements:  (context, payload) => {
        let url = payload==null?
            '/achievements' :
            `/users/achievements/${payload.userId}`;

        axios
            .get(url)
            .then(response => {
                context.commit('SET_ACHIEVEMENTS', response.data.achievements);
            });

    },

    loadCategories:  (context, payload) => {
        axios
            .get('/achievements/categories')
            .then(response => {
                console.log("cat", response.data.categories)
                this.categories = response.data.categories;

                this.category_type = this.categories[0].value;
                this.prepareActivateCategory()
            });

    },


};

export default {
    state,
    getters,
    mutations,
    actions,
};