// ** React Imports
import { Fragment, useEffect, memo } from 'react'

// ** Third Party Components
import classnames from 'classnames'

// ** Store & Actions
import { useSelector, useDispatch } from 'react-redux'
import { handleContentWidth, handleMenuCollapsed, handleMenuHidden } from '@store/layout'

// ** Styles
import 'animate.css/animate.css'

const LayoutWrapper = props => {
  // ** Props
  const { children, routeMeta } = props

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state)

  const navbarStore = store.navbar
  const layoutStored = store.layout.layout
  const contentWidth = store.layout.contentWidth
  const transition = store.layout.routerTransition
  //** Vars
  const appLayoutCondition =
    (layoutStored.layout === 'horizontal' && !routeMeta) ||
    (layoutStored.layout === 'horizontal' && routeMeta && !routeMeta.appLayout)
  const Tag = appLayoutCondition ? 'div' : Fragment

  // ** Clean Up Function
  const cleanUp = () => {
    if (routeMeta) {
      if (routeMeta.contentWidth) {
        dispatch(handleContentWidth('full'))
      }
      if (routeMeta.menuCollapsed) {
        dispatch(handleMenuCollapsed(!routeMeta.menuCollapsed))
      }
      if (routeMeta.menuHidden) {
        dispatch(handleMenuHidden(!routeMeta.menuHidden))
      }
    }
  }

  // ** ComponentDidMount
  useEffect(() => {
    if (routeMeta) {
      if (routeMeta.contentWidth) {
        dispatch(handleContentWidth(routeMeta.contentWidth))
      }
      if (routeMeta.menuCollapsed) {
        dispatch(handleMenuCollapsed(routeMeta.menuCollapsed))
      }
      if (routeMeta.menuHidden) {
        dispatch(handleMenuHidden(routeMeta.menuHidden))
      }
    }
    return () => cleanUp()
  }, [routeMeta])

  return (
    <div
      className={classnames('app-content content overflow-hidden', {
        [routeMeta ? routeMeta.className : '']: routeMeta && routeMeta.className,
        'show-overlay': navbarStore.query.length
      })}
    >
      <div className='content-overlay'></div>
      <div className='header-navbar-shadow' />
      <div
        className={classnames({
          'content-wrapper': routeMeta && !routeMeta.appLayout,
          'content-area-wrapper': routeMeta && routeMeta.appLayout,
          'container-xxl p-0': contentWidth === 'boxed',
          [`animate__animated animate__${transition}`]: transition !== 'none' && transition.length
        })}
      >
        <Tag {...(appLayoutCondition ? { className: 'content-body' } : {})}>{children}</Tag>
      </div>
    </div>
  )
}

export default memo(LayoutWrapper)
