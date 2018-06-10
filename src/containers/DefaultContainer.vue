<template>
  <div class="app">
    <AppHeader fixed>
      <SidebarToggler class="d-lg-none" display="md" mobile />
      <b-link class="navbar-brand" to="#">
        <img class="navbar-brand-full" src="/static/img/logo.png" width="123" height="54" alt="I`m Hungry Logo">
        <img class="navbar-brand-minimized" src="/static/img/logo-symbol.png" width="30" height="30" alt="I`m Hungry Logo">
      </b-link>
      <SidebarToggler class="d-md-down-none" display="lg" />
      <b-navbar-nav class="d-md-down-none">
        <b-nav-item class="px-3">Dashboard</b-nav-item>
        <b-nav-item class="px-3">Users</b-nav-item>
        <b-nav-item class="px-3">Settings</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="d-md-down-none">
          <i class="icon-bell"></i>
          <b-badge pill variant="danger">5</b-badge>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-list"></i>
        </b-nav-item>
        <b-nav-item class="d-md-down-none">
          <i class="icon-location-pin"></i>
        </b-nav-item>
        <AppHeaderDropdown right no-caret>
          <div>
          <template slot="button-content">
            <img
              src="static/img/avatars/6.jpg"
              class="img-avatar"
              alt="admin@bootstrapmaster.com" />
          </template>
          <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
          <b-dropdown-item><i class="fa fa-user" /> Perfil
            <b-badge variant="warning">{{ itemsCount }}</b-badge>
          </b-dropdown-item>
          <b-dropdown-header
            tag="div"
            class="text-center">
            <strong>Settings</strong>
          </b-dropdown-header>
          <b-dropdown-item><i class="fa fa-wrench" /> Configurações</b-dropdown-item>
          <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>
          </div>
        </AppHeaderDropdown>
      </b-navbar-nav>
      <AsideToggler class="d-none d-lg-block" />
      <!--<AsideToggler class="d-lg-none" mobile />-->
    </AppHeader>
    <div class="app-body">
      <AppSidebar fixed>
        <SidebarHeader/>
        <SidebarForm/>
        <SidebarNav :navItems="nav"></SidebarNav>
        <SidebarFooter/>
        <SidebarMinimizer/>
      </AppSidebar>
      <main class="main">
        <breadcrumb :list="list"/>
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
      <AppAside fixed>
        <!--aside-->
        <DafaultAside/>
      </AppAside>
    </div>
    <TheFooter>
      <!--footer-->
    </TheFooter>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, HeaderDropdown as AppHeaderDropdown, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Footer as TheFooter, Breadcrumb } from '@coreui/vue'
// import { Header as AppHeader, HeaderDropdown as AppHeaderDropdown, SidebarToggler, Sidebar as AppSidebar, SidebarFooter, SidebarForm, SidebarHeader, SidebarMinimizer, SidebarNav, Aside as AppAside, AsideToggler, Breadcrumb } from '../components/'
// import { Footer as TheFooter } from '@coreui/vue'
import DafaultAside from './DafaultAside'
// import store from '../store'

export default {
  data () {
    return {
      nav: nav.methods.newMenu(),
      itemsCount: 42
    }
  },
  name: 'full',
  components: {
    AsideToggler,
    AppHeader,
    AppHeaderDropdown,
    AppSidebar,
    AppAside,
    TheFooter,
    Breadcrumb,
    DafaultAside,
    SidebarForm,
    SidebarFooter,
    SidebarToggler,
    SidebarHeader,
    SidebarNav,
    SidebarMinimizer
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
