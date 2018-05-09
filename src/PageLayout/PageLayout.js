import * as React from 'react';
import Page1 from '../Page1/Page1';
import styles from './pageLayout.css';

class PageLayout extends React.Component {
    constructor(props) {
        super(props);

        this.count = 0;
    }

    componentDidMount() {
        // We need a counter because with Fiber cWM may be called multiple times
        this.count += 1;

        if (this.count === 1) {
            styles.use();

            console.log('PageLayout styles added');
        }
    }

    componentWillUnmount() {
        item.unuse();
        console.log('PageLayout styles removed');
    }

    render(){
        return (<div {...this.props}><Page1 /></div>);
    }
}

export default PageLayout;