<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <app-quote>
                 <app-quote-content slot="content"></app-quote-content>
                 <app-quote-author slot="author" :author="author"></app-quote-author>
               </app-quote>
               <button class="btn btn-default" @click="selectedSubView = 'app-profile-friends'">Friends</button>
               <button class="btn btn-default" @click="selectedSubView = 'app-profile-main'">Profile</button>
               <div class="panel panel-default">
                 <div class="panel-heading">Panel heading without title</div>
                 <div class="panel-body">
                  <keep-alive :include="/app-profile-main|app-profile-friends/">
                   <component v-bind:is="selectedSubView"></component>
                 </keep-alive>
                 </div>
               </div>

            </div>
        </div>
    </div>
</template>

<script>

    import AppQuote from './quotes/AppQuote.vue';
    import AppQuoteContent from './quotes/AppQuoteContent.vue';
    import AppQuoteAuthor from './quotes/AppQuoteAuthor.vue';
    import AppProfileMain from './profile/Profile.vue';
    import AppProfileFriends from './profile/Friends.vue';

    export default {
        data(){
          return {
            author : {
              id : 101,
              name: 'Lance Fallon',
              dob : new Date(1986,9,12),
              email : 'fallon.lance@gmail.com'
            },
            selectedSubView : 'app-profile-main'
          }
        },
        components: {
          'app-quote' : AppQuote,
          'app-quote-content' : AppQuoteContent,
          'app-quote-author' : AppQuoteAuthor,
          'app-profile-main' : AppProfileMain,
          'app-profile-friends' : AppProfileFriends
        }
    }
</script>

<style>
</style>
