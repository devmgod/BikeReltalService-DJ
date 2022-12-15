// ** Icons Import
import { BarChart2, UserPlus, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield, Airplay, Archive, Radio, List, Rss } from 'react-feather'

export default [
  // {
  //   header: 'Apps & Pages'
  // },
  {
    id: 'strategy',
    title: 'Strategy',
    icon: <Airplay size={20} />,
    navLink: '/apps/strategy'
  },
  {
    id: 'robot',
    title: 'Robot',
    icon: <Radio size={20} />,
    navLink: '/apps/robot'
  },
  {
    id: 'robotlist',
    title: 'Robot Favorites List',
    icon: <List size={20} />,
    navLink: '/apps/robotlist'
  },
  {
    id: 'apimanagement',
    title: 'API Management',
    icon: <Rss size={20} />,
    navLink: '/apps/apimanagement'
  },
  {
    id: 'invite',
    title: 'Invite Friends',
    icon: <UserPlus size={20} />,
    navLink: '/apps/invite'
  },
  // {
  //   id: 'invite',
  //   title: 'Invite Friends',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'invoiceList',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/list'
  //     },
  //     {
  //       id: 'invoicePreview',
  //       title: 'Preview',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/preview'
  //     },
  //     {
  //       id: 'invoiceEdit',
  //       title: 'Edit',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/edit'
  //     },
  //     {
  //       id: 'invoiceAdd',
  //       title: 'Add',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/invoice/add'
  //     }
  //   ]
  // },
  {
    id: 'users',
    title: 'User',
    icon: <User size={20} />,
    navLink: '/apps/user/list'
    // children: [
    //   {
    //     id: 'list',
    //     title: 'List',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/user/list'
    //   },
    //   {
    //     id: 'view',
    //     title: 'View',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/user/view'
    //   }
    // ]
  },

  {
    id: 'roles-permissions',
    title: 'User Level',
    icon: <BarChart2 size={20} />,
    navLink: '/apps/permissions'
    // children: [
    //   {
    //     id: 'roles',
    //     title: 'Roles',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/roles'
    //   },
    //   {
    //     id: 'permissions',
    //     title: 'Permissions',
    //     icon: <Circle size={12} />,
    //     navLink: '/apps/permissions'
    //   }
    // ]
  },
  {
    id: 'earning',
    title: 'Earning Display',
    icon: <Archive size={20} />,
    navLink: '/apps/earning'
  }
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // }
  
]
