import React from 'react';
const withJoke = Component => {
    return class extends React.Component {
        
        render() {
            return (
                <Component 
                    {...this.props}

                />
            )
        }
    }
}

export default withJoke;