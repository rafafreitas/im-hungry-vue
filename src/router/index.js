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
import Forbidden from '@/views/pages/Page404'

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
      component: Login,
      meta: {
        auth: false,
        userType: null
      }
    },
    {
      name: 'Forbidden',
      path: '/forbidden',
      component: Forbidden,
      meta: {
        auth: false,
        userType: null
      }
    },
    {
      name: 'Home',
      path: '/',
      component: DefaultContainer,
      children: [
        {
          name: 'Dashboard',
          path: 'dashboard',
          component: Dashboard,
          meta: {
            auth: true,
            userType: null
          }
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
              component: Company,
              meta: {
                auth: true,
                userType: 1
              }
            },
            {
              path: 'filiais',
              name: 'Filiais',
              component: Filial,
              meta: {
                auth: true,
                userType: 1
              }
            }
          ]
        },
        {
          path: 'pedidos',
          name: 'Pedidos',
          component: Pedidos,
          meta: {
            auth: true,
            userType: 2
          }
        },
        {
          path: 'relatorios',
          name: 'Relatorios',
          component: Relatorio,
          meta: {
            auth: true,
            userType: 1
          }
        },
        {
          path: 'faturamentos',
          name: 'Faturamentos',
          component: Faturamento,
          meta: {
            auth: true,
            userType: 1
          }
        }
      ]
    }
  ]
})
