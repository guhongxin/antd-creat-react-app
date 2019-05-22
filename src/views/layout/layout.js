import React from 'react'
import  {
  NavBar,
  SideBar,
  TagsView,
  AppMain
} from './components'
class Layout extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
   return (
    <div className="app-wrapper">
      <NavBar></NavBar>
      <SideBar></SideBar>
      <div className="main-container">
        <TagsView></TagsView>
        <AppMain></AppMain>
      </div>
    </div>
  )}
}
export default Layout