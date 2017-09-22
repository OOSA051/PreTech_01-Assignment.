// HEADER COMPONENT

'use strict';



var menu = {
    menus: [
    {
      title: 'Dashboard',
      link: '/index.html',
      isActive: true
    },
    {
      title: 'Profile',
      link: '/workflow.html',
      isActive: false

    },
    {
      title: 'Daily Stats',
      link: '/todo.html',
      isActive: false

    },
    {
      title: 'Messages',
      link: '/messages.html',
      isActive: false
    }
    ]
}
Vue.component('main-menu', {
  template: `
              <ul class="tabs" v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" v-bind:class="{ active: menu.isActive }">{{ menu.title }}</a>
                </li>
              </ul>
            `,
  data: function() {
    return menu;
  }
});

var menus = new Vue({
  el: '#mainmenu'
})





