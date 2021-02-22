import React from 'react';
import ReactDOM from 'react-dom';

// Define React component class
class Toggle extends React.Component {
    // Always has a constructor
    constructor (props) {
        super(props);
        this.state = { isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    // Lifecycle functions that trigger on DOMNode creation (aka "mount") and removal (aka "unmount")
    // Removal is essential part of GC so irrelevant/removed nodes don't keep using resources
    // Note, reactjs pattern/conventions dictate parent components be in charge of unmounting children (example explored elsewhere) 
    componentDidMount () {
        console.log('did mount');
    }
    
    componentWillUnmount () {
        console.log('did unmount');
    }

    // Event handlers (other events such as blur, change, submit all work)
    handleClick () {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    // Component-specific methods (called using "this.functionName(params)")
    // Eg. validation can be done here
    functionName (params) {
        console.log('triggered functionName(', params.toString(), ')');
    }

    render () {
        // Method #2: Conditional rendering based on state's isToggleOn property value
        const isToggleOn = this.state.isToggleOn;
        let button;
        if (isToggleOn) {   // if true, show the "on" button, else show "off"
            button = <button onClick={this.handleClick}>on</button>;
        } else {
            button = <button onClick={this.handleClick}>off</button>;
        }

        // This part where the syntax looks like HTML written straight in <script> is "JSX"
        return (
            // Note, this parent <div> tag wrapping both buttons is required as JSX can only return ONE element at a time
            // This parent element doesn't have to be div
            // Anything inside the span is interpretted as STRING node or HTML tags
            <span>
                // Method #1: One way of writing conditional rendering<br/>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF'}
                </button><br/>
                // Method #2: Another way...<br/>
                {button}<br/>
                // Notice both buttons change when either button is clicked.<br/>
                // They share the same instance of 'Toggle'; its state and its onClick. The 'this' refers to the same Toggle.
            </span>
        );
    }
}