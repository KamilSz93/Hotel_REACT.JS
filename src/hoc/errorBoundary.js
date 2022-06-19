import { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        console.log('Error Boundary:');
        console.log(error, errorInfo);
    }
    

    render() {
        return this.props.children;
    }
}

export default ErrorBoundary;