import store from './store'
export default {
  menu: store.state.userType,
  methods: {
    newMenu () {
      if (store.state.userType === 1) {
        return [
          {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
              variant: 'warning',
              text: 'BREVE'
            }
          },
          {
            title: true,
            name: 'Índice Geral',
            class: '',
            wrapper: {
              element: '',
              attributes: {}
            }
          },
          {
            name: 'Estabelecimentos',
            url: '/company',
            icon: 'icon-puzzle',
            children: [
              {
                name: 'Minhas Empresas',
                url: '/company/my-company',
                icon: 'fa fa-building-o'
              },
              {
                name: 'Minhas Filiais',
                url: '/company/filiais',
                icon: 'icon-puzzle'
              }
            ]
          },
          {
            divider: true
          },
          {
            name: 'Relatório',
            url: '/relatorios',
            icon: 'fa fa-newspaper-o',
            badge: {
              variant: 'warning',
              text: 'BREVE'
            }
          },
          {
            name: 'Faturamento',
            url: '/faturamentos',
            icon: 'fa fa-usd',
            badge: {
              variant: 'warning',
              text: 'BREVE'
            }
          },
          {
            name: 'Download Android',
            url: 'https://play.google.com/store',
            icon: 'fa fa-android',
            class: 'mt-auto',
            variant: 'success'
          },
          {
            name: 'Download IO`s',
            url: 'https://www.apple.com/br/',
            icon: 'fa fa-apple',
            variant: 'danger'
          }
        ]
      }
      if (store.state.userType === 2) {
        return [
          {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
              variant: 'warning',
              text: 'BREVE'
            }
          },
          {
            title: true,
            name: 'Índice Geral',
            class: '',
            wrapper: {
              element: '',
              attributes: {}
            }
          },
          {
            name: 'Pedidos',
            url: '/pedidos',
            icon: 'fa fa-shopping-cart',
            badge: {
              variant: 'warning',
              text: 'BREVE'
            }
          },
          {
            name: 'Download Android',
            url: 'https://play.google.com/store',
            icon: 'fa fa-android',
            class: 'mt-auto',
            variant: 'success'
          },
          {
            name: 'Download IO`s',
            url: 'https://www.apple.com/br/',
            icon: 'fa fa-apple',
            variant: 'danger'
          }
        ]
      }
    }
  }
}// module.exports = menu
