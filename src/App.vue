<template>
  <div id="app" class="app" :class="[layout, uiState]">
    <div class="global-container">
      <header class="header" v-if="layout !== 'layout-auth'">
        <div class="header-logo">
          <router-link class="header-logo__link" to="/">Образовательный центр ПМК - Личный кабинет</router-link>
        </div>
        <div class="header-nav">
          <router-link class="header-nav__link" to="/library">Сервисы</router-link>
          <router-link class="header-nav__link" to="/homework">События</router-link>
          <router-link class="header-nav__link" to="/journal">Дневник</router-link>
          <router-link class="header-nav__link" to="/homework">Домашнее задание</router-link>
        </div>
        <div class="header-controls">
          <a href="#" class="header-controls__link"><icon-search/></a>
          <a href="#" class="header-controls__link"><icon-faq/></a>
          <a href="#" class="header-controls__link"><icon-mail/></a>
        </div>
        <button class="header-calendar"><icon-calendar/></button>
        <button class="header-toggle" @click="isSidebarOpen = (isSidebarOpen === true ? false : true)">
          <span class="hamburger hamburger--collapse" :class="{'is-active': isSidebarOpen}">
              <span class="hamburger-box">
                  <span class="hamburger-inner"></span>
              </span>
          </span>
        </button>
        <div class="header-user header-user--online">
          <a href="#" class="header-user__avatar online online--online">
            <img src="https://via.placeholder.com/32" class="header-user__img">
          </a>
          <div class="header-user__info">
            <div class="header-user__name">Анна Петрова</div>
            <div class="header-user__position">Группа 41-ТК</div>
          </div>
        </div>
        <aside class="header-sidebar" :class="{'open': isSidebarOpen}">
          <div class="header-mobile-nav">
            <div class="header-mobile-nav__row">
              <router-link class="header-mobile-nav__link" to="/library">Сервисы</router-link>
              <router-link class="header-mobile-nav__link" to="/homework">События</router-link>
              <router-link class="header-mobile-nav__link" to="/journal">Дневник</router-link>
            </div>
            <div class="header-mobile-nav__row">
              <router-link class="header-mobile-nav__link" to="/homework">Домашнее задание</router-link>
            </div>
          </div>
          <div class="header-date">
            <div class="header-date__year">2019</div>
            <div class="header-date__day">30 сентября</div>
          </div>
          <header-events></header-events>
          <div class="header-links">
            <a href="#" class="header-link"><icon-support/>Техническая поддержка</a>
            <a href="#" class="header-link"><icon-back/>На сайт колледжа</a>
          </div>
        </aside>
      </header>
      <main class="main">
        <div class="main-controls" v-if="layout !== 'layout-auth'">
          <b-breadcrumb class="breadcrumb-custom" :items="items"></b-breadcrumb>
          <div v-if="$route.name === 'home'" class="main-controls__buttons">
            <button class="main-controls__btn"><icon-square-plus/>Добавить виджет</button>
            <button class="main-controls__btn"><icon-calendar/>Показать календарь</button>
          </div>
        </div>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
  import IconFaq from './components/icons/IconFaq'
  import IconMail from './components/icons/IconMail'
  import IconSearch from './components/icons/IconSearch'
  import IconSupport from './components/icons/IconSupport'
  import IconBack from './components/icons/IconBack'
  import IconSquarePlus from './components/icons/IconSquarePlus'
  import IconCalendar from './components/icons/IconCalendar'
  import HeaderEvents from './components/HeaderEvents';

  export default {
      name: 'App',
      components: {
          IconFaq,
          IconMail,
          IconSearch,
          IconSupport,
          IconBack,
          IconSquarePlus,
          IconCalendar,
          HeaderEvents
      },
      data() {
          return {
              items: [
                 {
                     text: 'Личный кабинет',
                     href: '#'
                 },
                 {
                     text: 'Рассписание',
                     active: true
                 }
             ],
              login: false,
              isSidebarOpen: false
          }
      },
      computed: {
          layout: function() {
              if (['login', 'register', 'recovery'].indexOf(this.$route.name) !== -1) {
                  return 'layout-auth';
              } else {
                  return '';
              }
          },
          uiState: function() {
              if (this.isSidebarOpen) {
                  return 'state-menu-open'
              } else {
                  return ''
              }
          }
      }
  }
</script>

<style lang="scss">
@import "styles/app";
</style>
