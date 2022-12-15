// ** Icons Import
import { Home, Circle } from 'react-feather'

export default [
  {
    id: 'dashboards',
    title: 'Leaderboard',
    icon: <Home size={20} />,
    badge: 'light-warning',
    // badgeText: '2',
    navLink: '/dashboard/analytics'
    // children: [
    //   {
    //     id: 'analyticsDash',
    //     title: 'Analytics',
    //     icon: <Circle size={12} />,
    //     navLink: '/dashboard/analytics'
    //   },
    //   {
    //     id: 'eCommerceDash',
    //     title: 'Earnings Display',
    //     icon: <Circle size={12} />,
    //     navLink: '/dashboard/ecommerce'
    //   }
    // ]
  }
]
