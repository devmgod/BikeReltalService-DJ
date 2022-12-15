// ** Navigation imports
import dashboards from "./dashboards"
import apps from "./apps"
import pages from "./pages"
import forms from "./forms"
import tables from "./tables"
import others from "./others"
import charts from "./charts"
import uiElements from "./ui-elements"

// ** Merge & Export
export default [
  ...dashboards,
  ...apps,
  ...pages,
  ...uiElements,
  ...forms,
  ...tables,
  ...charts,
  ...others
]
