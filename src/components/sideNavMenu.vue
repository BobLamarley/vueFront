<template>
  <div>
    <div id="mySidenav" class="sidenav" v-bind:class="[ isMenuOpen ? 'open-menu' : 'close-menu' ]">
      <router-link to="/home">Accueil</router-link>
      <router-link to="/dictionnary">Dictionnaire</router-link>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/settings">Paramètres</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sideNavMenu',
  computed: {
    isMenuOpen: function () {
      return this.$store.state.menu.isMenuOpen
    }
  }
}
</script>

<style>
.open-menu
{
  width: 250px;
}

.close-menu
{
  width: 0px;
}

/* The side navigation menu */
.sidenav {
    height: 100%; /* 100% Full-height */
    position: fixed; /* Stay in place */
    z-index: 0; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #111; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 80px; /* Place content 60px from the top */
    transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
    color: #f1f1f1;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation
#app {
    transition: margin-left .5s;
    padding: 20px;
}
*/
/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
}
</style>
