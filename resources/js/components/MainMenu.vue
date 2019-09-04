<template>
    <ul>
        <li @click="openModal('howtostart')" class="btn btn-black">{{$lang.menu.how_to_start}}</li>
        <li @click="openModal('history')" class="btn btn-black">{{$lang.menu.history}}</li>
        <li @click="openModal('help')" class="btn btn-black">{{$lang.menu.help}}</li>
        <li @click="openModal('faq')" class="btn btn-black">{{$lang.menu.f_a_q}}</li>
        <li @click="openModal('payment')" class="btn btn-yellow">{{$lang.menu.recharge}}</li>
        <li v-if="authenticated && user!=null" class="user" @click="selfHide()" >
            <div class="info">
                <p class="name">{{user.name}}</p>
                <p class="email">{{user.email}}</p>
                <p class="pucks"><strong>{{Math.floor(user.money)}}</strong> {{$lang.menu.money}}</p>
            </div>
            <div class="avatar" @mouseover="openMenu(2000)">
                <img :src="getAvatar(user.avatar)" alt="">
            </div>
            <div v-if="menuShow" class="dropdown" @mouseover="openMenu(2000)"
                 @mouseleave="closeMenu()">
                <ul>
                    <li>
                        <router-link :to="{ name: 'Cabinet' }" tag="a">{{$lang.menu.user_cabinet}}</router-link>
                    </li>
                    <li v-if="authenticated && user">
                        <a href="#" @click="logout()">{{$lang.menu.logout}}</a>
                    </li>
                </ul>
            </div>
        </li>
        <li v-else class="auth"  @click="selfHide()" >
            <router-link to="/signin" tag="button"  class="btn btn-info ">{{$lang.menu.sign_in}}</router-link>
            <router-link to="/signup" tag="button"  class="btn btn-primary ">{{$lang.menu.sign_up}}</router-link>
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
                this.$store.dispatch('logoutUser').then(()=>{
                    Event.$emit("userLogout")
                    this.$router.push({path:"/signin"});
                });
            },
            getAvatar(img) {
                if (img == '' || img == null || img == undefined)
                    return "/img/noavatar.png";
                else
                    return `/img/avatars/${img}`;
            },
        }
    }

</script>

