import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { ContextProvider } from "./context/GamestashContext";
import LandingPage from './routes/LandingPage/LandingPage'
import Dashboard from './routes/Dashboard/Dashboard'
import Header from './components/Header/Header'

const App = () => {
    return (
        <ContextProvider>
        <div>
            <Header />
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Router>
        </div>
        </ContextProvider>
    )
}

export default App;