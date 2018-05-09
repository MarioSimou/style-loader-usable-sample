import * as React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import styles from './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.count = 0;
    }
    componentDidMount() {
        // We need a counter because with Fiber cWM may be called multiple times
        this.count += 1;

        if (this.count === 1) {
            styles.use();

            console.log('App styles added');
        }
    }

    componentWillUnmount() {
        item.unuse();
        console.log('App styles removed');
    }

    render(){
        return (<div><PageLayout /></div>);
    }
}

export default App;
