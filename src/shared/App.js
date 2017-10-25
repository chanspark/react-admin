import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Home, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div>
                    <Route exact path="/" component={Home}></Route>
                    <Switch>
                        <Route path="/about/:name" component={About}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                    <Route path="/posts" component={Posts}></Route>
                </div>

            </div>
        );
    }
}

export default App;