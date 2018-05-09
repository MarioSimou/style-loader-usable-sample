import * as React from 'react';
import styles from './page1.css';

class Page1 extends React.Component {
    constructor(props) {
        super(props);

        this.count = 0;
    }
    componentDidMount() {
        // We need a counter because with Fiber cWM may be called multiple times
        this.count += 1;

        if (this.count === 1) {
            styles.use();

            console.log('Page1 styles added');
        }
    }

    componentWillUnmount() {
        item.unuse();
        console.log('Page1 styles removed');
    }

    render(){
        return (<div className={styles.locals.class1}>Hello</div>);
    }
}

export default Page1;
