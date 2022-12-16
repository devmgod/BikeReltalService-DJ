// ** Icons Import
import { BarChart2, UserPlus, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Airplay, Archive, Radio, List, Rss } from 'react-feather'

export default [
  {
    id: 'users',
    title: 'Users',
    icon: <Airplay size={20} />,
    navLink: '/apps/users'
  },
  {
    id: 'bikes',
    title: 'All Bikes',
    icon: <Radio size={20} />,
    navLink: '/apps/bikes'
  },
  {
    id: 'reservation',
    title: 'Reservation',
    icon: <List size={20} />,
    navLink: '/apps/reservation'
  },
  {
    id: 'buyers',
    title: 'Buyers',
    icon: <Rss size={20} />,
    navLink: '/apps/buyers'
  },


  {
    id: 'invite',
    title: 'Invite Friends',
    icon: <UserPlus size={20} />,
    navLink: '/apps/invite'
  },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    navLink: '/apps/user/list'
  },

  {
    id: 'roles-permissions',
    title: 'User Level',
    icon: <BarChart2 size={20} />,
    navLink: '/apps/permissions'
  },
  {
    id: 'earning',
    title: 'Earning Display',
    icon: <Archive size={20} />,
    navLink: '/apps/earning'
  }
]
