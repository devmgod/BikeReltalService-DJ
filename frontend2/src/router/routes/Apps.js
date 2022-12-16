// ** React Imports
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

const Users = lazy(() => import('../../views/apps/users'))
const Bikes = lazy(() => import('../../views/apps/bikes'))
const Reservation = lazy(() => import('../../views/apps/reservation'))
const Buyers = lazy(() => import('../../views/apps/apimanagement'))
const Invite = lazy(() => import('../../views/apps/invite'))
const Earning = lazy(() => import('../../views/apps/earning'))


const Chat = lazy(() => import('../../views/apps/chat'))
const Todo = lazy(() => import('../../views/apps/todo'))
const Email = lazy(() => import('../../views/apps/email'))
const Calendar = lazy(() => import('../../views/apps/calendar'))

const InvoiceAdd = lazy(() => import('../../views/apps/invoice/add'))
const InvoiceList = lazy(() => import('../../views/apps/invoice/list'))
const InvoiceEdit = lazy(() => import('../../views/apps/invoice/edit'))
const InvoicePrint = lazy(() => import('../../views/apps/invoice/print'))
const InvoicePreview = lazy(() => import('../../views/apps/invoice/preview'))

const EcommerceShop = lazy(() => import('../../views/apps/ecommerce/shop'))
const EcommerceDetail = lazy(() => import('../../views/apps/ecommerce/detail'))
const EcommerceWishlist = lazy(() => import('../../views/apps/ecommerce/wishlist'))
const EcommerceCheckout = lazy(() => import('../../views/apps/ecommerce/checkout'))

const UserList = lazy(() => import('../../views/apps/user/list'))
const UserView = lazy(() => import('../../views/apps/user/view'))

const Roles = lazy(() => import('../../views/apps/roles-permissions/roles'))
const Permissions = lazy(() => import('../../views/apps/roles-permissions/permissions'))

const AppRoutes = [
  {
    element: <Users />,
    path: '/apps/strategy'
  },
  {
    path: '/apps/robot',
    element: <Bikes />
  },
  {
    element: <Reservation />,
    path: '/apps/robotlist'
  },
  {
    element: <Buyers />,
    path: '/apps/apimanagement'
  },
  {
    element: <Invite />,
    path: '/apps/invite'
  },
  {
    element: <Earning />,
    path: '/apps/earning'
  },
    {
    element: <UserList />,
    path: '/apps/user/list'
  },
  {
    path: '/apps/user/view',
    element: <Navigate to='/apps/user/view/1' />
  },
  {
    element: <UserView />,
    path: '/apps/user/view/:id'
  },
  {
    element: <Roles />,
    path: '/apps/roles'
  },
  {
    element: <Permissions />,
    path: '/apps/permissions'
  }
]

export default AppRoutes
