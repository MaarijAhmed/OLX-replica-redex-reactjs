import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimarySearchAppBar from './navbar.js'
import { connect } from 'react-redux'

class App extends React.Component {
   render() {
      console.log("redux_data=>",this.props)
      return (
         <PrimarySearchAppBar />
      )
   }}


   const mapDispatchToProps = {
      
   }


   const mapStateToProps = (state) => (
      {
         username : state.auth.username,
         email : state.auth.email,
         appname : state.auth.app,
      }
   )
      
   
      export default connect(mapStateToProps,null)(App)
