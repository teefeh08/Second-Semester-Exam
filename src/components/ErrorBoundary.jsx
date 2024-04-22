// eslint-disable-next-line no-unused-vars
import React, { Component} from 'react';
// import propTypes from 'prop-types'
// import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state = {hasError : false};
    }

    static getDerivedStateFromError(error){
        return {hasError : true, error};
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by error boundary:', error, errorInfo);
    }

    closeModal(){
        this.setState({hasError:false});
    }

    render() {
        if (this.state.hasError){
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <button onClick={() =>this.closeModal()}>CLOSE</button>
                
                </div>
            );
        } else{
            // eslint-disable-next-line react/prop-types
            return this.props.children;

        }
        
    }
}


export default ErrorBoundary