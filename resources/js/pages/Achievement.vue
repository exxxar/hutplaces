<template>
    <div class="info-block">
        <ul class="filters c-type" v-if="categories!=null">
            <li v-for="cat in categories" @click="filterCategory(cat.value)">
                #{{prepareCategoryText(cat.key)}}
            </li>
        </ul>

        <hr>

        <ul class="filters f-type" v-if="types">

            <li v-for="t in types" :count="t.count" @click="filterTrigger(t.trigger.value)">
                #{{prepareTypeText(t.trigger.key)}}
            </li>
        </ul>


        <h1 class="main-title" v-html="$lang.achievements.main_title"></h1>
        <p class="description" v-html="$lang.achievements.main_description"></p>
        <ul class="achievements" v-if="achievements!=null&&achievements.length>0">
            <li v-for="a in prepareAchievements()" :style="cssProps(a.background)" v-if="a.is_active">
                <div class="image" v-tooltip.bottom="prepareRewards(a)" @click="show('ach',a)">
                    <img v-lazy="prepareImage(a.image)" alt="">
                </div>
                <div class="text">
                    <h4>{{prepareText(a.title)}}</h4>
                </div>
            </li>
        </ul>
        <div class="no-items" v-if="achievements==null||achievements.length==0"><img :src="$lang.achievements.no_ach"
                                                                                     alt=""></div>

        <modal name="ach" :adaptive="true" width="100%" height="100%">
            <scroll class="scroll-area">
                <a href="#" @click="hide('ach')" class="close"></a>
                <div class="selected-achievement" v-if="selected.ach!=null">
                    <h1>{{prepareText(selected.ach.title)}}</h1>
                    <p>{{prepareText(selected.ach.description)}}</p>
                    <p><strong>{{ prepareRewards(selected.ach, false)}}</strong></p>


                    <div class="progress" v-if="selected.needed>0">
                        <div class="line" :style="lineWidth(selected.current,selected.needed)"></div>
                        <div class="info">
                            <h3>{{prepareTypeText(selected.trigger_title)}}</h3>
                            <span v-if="selected.current<selected.needed">{{selected.current}}/{{selected.needed}}</span>
                            <span v-else>{{$lang.achievements.completed}}</span>

                        </div>
                    </div>
                    <div class="achievement" :style="cssProps(selected.ach.background)">
                        <div class="image">
                            <img v-lazy="prepareImage(selected.ach.image)" alt="">
                        </div>
                    </div>
                </div>
            </scroll>
        </modal>
    </div>
</template>

<script>
    import Scroll from 'vue-custom-scrollbar'

    export default {
        props: ["userId"],
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData',
            loadAchievements(newValue, oldValue) {
                this.achievements = newValue
            },
        },
        mounted() {
            Event.$on('updateAchievements', () => {
                this.fetchData()
            });
        },
        computed: {
            loadAchievements() {
                return this.$store.getters.ACHIEVEMENTS;
            },
        },

        methods: {
            fetchData() {
                this.loadCategories()
                this.loadTypes()

                if (this.userId != null)
                    this.$store.dispatch("loadAchievements", {userId: this.userId})
            },
            lineWidth: function (c1, c2) {
                var c0 = c1 > c2 ? c2 : c1;
                return {
                    '--line-width': ((c0 / c2) * 100) + '%'
                }
            },
            show(name, ach) {
                this.selected.ach = ach;
                if (this.userId == null) {
                    axios
                        .get(`/achievements/progress/${ach.id}`)
                        .then(response => {
                            this.selected.current = response.data.current;
                            this.selected.needed = response.data.needed;
                            this.selected.trigger_title = response.data.trigger_title;
                        });
                }
                else {
                    axios
                        .post(`/users/achievements/progress`, {
                            user_id: this.userId,
                            ach_id: ach.id
                        })
                        .then(response => {
                            this.selected.current = response.data.current;
                            this.selected.needed = response.data.needed;
                            this.selected.trigger_title = response.data.trigger_title;
                        });
                }
                this.$modal.show(name)
            },
            hide(name) {
                this.$modal.hide(name)
            },
            filterCategory(type) {
                this.category_type = type
            },
            filterTrigger(type) {
                this.trigger_type = type
            },
            cssProps(bg) {
                return {
                    '--background-achievements': `url('/img/achievements/bg/${bg}')`,
                }
            },
            prepareImage(img) {
                return `/img/achievements/element/${img}`;
            },
            prepareCategoryText(type) {
                return eval(`this.$lang.achcategories.${type.toLowerCase()}`);
            },
            prepareTypeText(type) {
                return eval(`this.$lang.triggertypes.${type.toLowerCase()}`);
            },
            prepareText(key) {
                return eval(`this.$lang.${key.toLowerCase()}`);
            },

            prepareRewards(ach, br = true) {
                var tmp = '';
                var hasPrize = false;


                if (ach.discount != null && ach.discount != 0) {
                    tmp += eval(`this.$lang.achievements.discount`) + (br ? "<br>" : ", ");
                    hasPrize = true;
                }

                if (ach.exp != null && ach.exp != 0) {
                    tmp += eval(`this.$lang.achievements.exp`) + (br ? "<br>" : ", ");
                    hasPrize = true;
                }

                if (ach.coins != null && ach.coins != 0) {
                    tmp += eval(`this.$lang.achievements.coins`) + (br ? "<br>" : ", ");
                    hasPrize = true;
                }

                if (ach.money != null && ach.money != 0) {
                    tmp += eval(`this.$lang.achievements.money`) + (br ? "<br>" : ", ");
                    hasPrize = true;
                }

                if (ach.card_id != null) {
                    tmp += eval(`this.$lang.achievements.card`) + (br ? "<br>" : ", ");
                    hasPrize = true;
                }

                if (ach.item_id != null) {
                    tmp += eval(`this.$lang.achievements.item`) + (br ? "<br>" : "");
                    hasPrize = true;
                }

                if (hasPrize)
                    tmp = (ach.random_rewards ? eval(`this.$lang.achievements.r_one`) : eval(`this.$lang.achievements.r_many`)) + (br ? "<br>" : " ") + tmp.toLowerCase();
                else
                    tmp = eval(`this.$lang.achievements.empty`)


                return tmp.lastIndexOf(",") > 0 ?
                    tmp.slice(0, tmp.lastIndexOf(",")) :
                    tmp;
            },

            loadCategories() {
                axios
                    .get('/achievements/categories')
                    .then(response => {
                        console.log("cat", response.data.categories)
                        this.categories = response.data.categories;

                        this.category_type = this.categories[0].value;
                        this.prepareActivateCategory()
                    });
            },

            loadTypes() {
                let url = this.userId == null ?
                    '/achievements/types' :
                    `/users/achievements/types/${this.userId}`;

                axios
                    .get(url)
                    .then(response => {
                        this.types = response.data.trigger_types;

                        console.log("this.types=", this.types)
                        this.trigger_type = this.types[0].trigger.value
                        this.prepareActivateType();
                    });
            },

            prepareAchievements() {
                return this.trigger_type != null && this.category_type != null ?
                    this.achievements
                        .filter(ach => ach.trigger_type == this.trigger_type && ach.category == this.category_type) :
                    this.achievements;
            },
            prepareActivateType() {
                document.querySelectorAll(".filters.f-type li").forEach(function (a) {
                    console.log("elem");
                    a.onclick = function () {
                        document.querySelectorAll(".filters.f-type li").forEach(function (b) {
                            b.style.cssText = "color:white;font-weight:100;";
                        });

                        a.style.cssText = "font-weight:900;color:yellow;";
                    }
                });

                var li = document.querySelectorAll(".filters.f-type li")[0];
                if (li != undefined)
                    li.style.cssText = "color:yellow;";


            },
            prepareActivateCategory() {

                document.querySelectorAll(".filters.c-type li").forEach(function (a) {
                    a.onclick = function () {
                        document.querySelectorAll(".filters.c-type li").forEach(function (b) {
                            b.style.cssText = "color:white;font-weight:100;";
                        });

                        a.style.cssText = "font-weight:900;color:yellow;";
                    }
                });

                var li = document.querySelectorAll(".filters.c-type li")[0]
                if (li != undefined)
                    li.style.cssText = "color:yellow;";
            }

        },
        data() {
            return {

                achievements: null,
                trigger_type: null,
                category_type: null,
                types: null,
                categories: null,
                selected: {
                    current: 0,
                    needed: 0,
                    trigger_title: "empty",
                    ach: null
                }
            }
        },
        components: {
            Scroll,
        }

    }
</script>
<style lang="scss" scoped>
    @import "~/achievements.scss";
    @import "~/cabinet.scss";

    hr {
        width: 100px;
        height: 1px;
        border: none;
        background: yellow;
    }
</style>

