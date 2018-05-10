import * as React from 'react';
import PageLayout from '../PageLayout/PageLayout';
import styles from './app.css';

class App extends React.Component {
    componentDidMount() {
        styles.use();
        console.log('App styles added');
    }

    componentWillUnmount() {
        styles.unuse();
        console.log('App styles removed');
    }

    render(){
        return (<div><PageLayout /></div>);
    }
}

export default App;
