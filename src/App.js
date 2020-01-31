import React, {
  Fragment
} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import Landing from './components/landing/Landing'
import Header from './components/landing/Navbar'
import Mortgage from './components/mortgage/Mortgage'
import Preview from './components/mortgage/Preview'
import PaymentLoan from './components/payments/PaymentLoan'
import PaymentScheduler from './components/payments/PaymentScheduler'
import { history } from "../src/components/helpers/history"
const App = () => {
  return (

    <Router history={history}>
      <Fragment>
        <Switch>
          <Route exact path='/' render={() => <Header > <Landing /></Header>} />
          <Route exact path='/mortgage' render={() => <Header > <Mortgage /></Header>} />
          <Route exact path='/Preview' render={() => <Header > <Preview /></Header>} />
          <Route exact path='/paymentLoan' render={() => <Header > <PaymentLoan /></Header>} />
          <Route exact path='/paymentScheduler' render={() => <Header > <PaymentScheduler /></Header>} />
        </Switch>
      </Fragment>
    </Router>


  )

}



export default App;