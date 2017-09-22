// MINI MENU COMPONENT

'use strict';


var minimenu = {
    image: 'img/logo.png'
}

var menu = {
    menus: [
    {
      link: '/settings.html',
      icon: 'fa fa-cog',
    },
    {
      link: '/logout.html',
      icon: 'fa fa-bell',
    }
    ]
}


Vue.component('mini-menu', {
  template: `<div class="mini-menu">
              <ul v-if="menus.length">
                <li v-for="menu in menus">
                  <a :href="menu.link" class="btn">
                    <i :class="menu.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
            `,
  data: function() {
    return menu;
  }
})

var minimenu = new Vue({
  el: '#minimenu'
})