Israel Menis Mas19:43
  return (

    <div className="container">

        <h1>React If ElseIf Condition Example - HDTuto.com</h1>

   

        {(() => {

            if (userType == 1) {

              return (

                <div>You are a Admin.</div>

              )

            } else if (userType == 2) {

              return (

                <div>You are a Manager.</div>

              )

            } else {

              return (

                <div>You are a User.</div>

              )


              import Sidebar from './Sidebar';
import Content from './Content';
import Avatar from './Avatar';

import {userContext} from './userContext';

function Main(props) {
  return (
    <Sidebar/>
    <userContext.Consumer>
      {({value}) => {
        <Avatar value={value}/>
      }}
    </userContext.Consumer>
    <Content/>
  )
}

export default Main;