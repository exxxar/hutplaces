<template>
    <ul>
        <!--todo:сделать отдельно компоненты главного меню и бокового-->
        <li @click="openModal('howtostart')" class="btn btn-black">{{$lang.messages.how_to_start}}</li>
        <li @click="openModal('history')" class="btn btn-black">{{$lang.messages.history}}</li>
        <li @click="openModal('help')" class="btn btn-black">{{$lang.messages.help}}</li>
        <li @click="openModal('faq')" class="btn btn-black">{{$lang.messages.f_a_q}}</li>
        <li @click="openModal('payment')" class="btn btn-yellow">{{$lang.messages.recharge}}</li>


        <li v-if="authenticated && user" class="user" @click="selfHide()" >
            <div class="info">
                <p class="name">{{user.name}}</p>
                <p class="email">{{user.email}}</p>
                <p class="pucks"><strong>{{Math.floor(user.money)}}</strong> Pucks</p>
            </div>
            <div class="avatar" @mouseover="openMenu(2000)">
                <img :src="getAvatar(user.avatar)" alt="">
            </div>
            <div v-if="menuShow" class="dropdown" @mouseover="openMenu(2000)"
                 @mouseleave="closeMenu()">
                <ul>
                    <li>
                        <router-link :to="{ name: 'cabinet' }" tag="a">User cabinet</router-link>
                    </li>
                    <li v-if="authenticated && user">
                        <a href="#" @click="logout()">Logout</a>
                    </li>

                </ul>
            </div>

        </li>


        <li v-else class="auth"  @click="selfHide()" >
            <router-link to="/signin" tag="button"  class="btn btn-info ">Sign In</router-link>
            <router-link to="/signup" tag="button"  class="btn btn-primary ">Sign Up</router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        name: 'defaultLayout',
        props:{
            authenticated:Boolean,
            user:Object,
            alwaysShow: {
                type:Boolean,
                default:false
            }
        },

        data(){
          return {
              menuShow: this.alwaysShow,
              menuHideTimer:null,
          }
        },

        methods: {
            selfHide(){
                this.$emit("self-hide");
            },
            closeMenu(){
                if (this.alwaysShow)
                    return;

                this.menuShow = false;
            },
            openMenu(time){
                if (this.alwaysShow)
                    return;

                this.menuShow = true;
                if (this.menuHideTimer!=null)
                    clearTimeout(this.menuHideTimer);
                this.menuHideTimer = setTimeout(()=>this.menuShow = false,time);
            },
            openModal(name){
                this.selfHide();
                this.$emit("modal",name);
            },
            logout() {
                auth.logout();
                this.$router.push('signin');
            },
            getAvatar(img) {
                if (img == '' || img == null || img == undefined)
                    return "/img/noavatar.png";
                else
                    return img;
            },
        }
    }

</script>

