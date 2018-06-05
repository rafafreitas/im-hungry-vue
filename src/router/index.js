import Vue from 'vue'
import Router from 'vue-router'

// Containers
import DefaultContainer from '@/containers/DefaultContainer'

// Views
import Dashboard from '@/views/Dashboard'

import Company from '@/views/company/Company'
import Filial from '@/views/company/Filial'

import Pedidos from '@/views/temp/Temp1'
import Relatorio from '@/views/temp/Temp2'
import Faturamento from '@/views/temp/Temp3'

// Views - Pages
import Login from '@/views/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/home',
      redirect: {
        name: 'Dashboard'
      }
    },
    {
      name: 'Login',
      path: '/login',
      component: Login
    },
    {
      name: 'Dashboard',
      path: '/',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'company',
          redirect: '/company/my-company',
          name: 'Estabelecimentos',
          component: {
            render (c) { return c('router-view') }
          },
          children: [
            {
              path: 'my-company',
              name: 'Empresas',
              component: Company
            },
            {
              path: 'filiais',
              name: 'Filiais',
              component: Filial
            }
          ]
        },
        {
          path: 'pedidos',
          name: 'Pedidos',
          component: Pedidos
        },
        {
          path: 'relatorios',
          name: 'Relatorios',
          component: Relatorio
        },
        {
          path: 'faturamentos',
          name: 'Faturamentos',
          component: Faturamento
        }
      ]
    }
  ]
})
