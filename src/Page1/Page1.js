import * as React from 'react';
import styles from './page1.css';

class Page1 extends React.Component {
    componentDidMount() {
        styles.use();
        console.log('Page1: styles added');
    }

    componentWillUnmount() {
        styles.unuse();
        console.log('Page1: styles removed');
    }

    render(){
        return (<div className={styles.locals.class1}>Hello</div>);
    }
}

export default Page1;
