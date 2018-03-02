import React from 'react';
import PropTypes from 'prop-types';

class Process extends React.Component {
    static propTypes = {
        primaryColor: PropTypes.string,
    };


    render() {
        return (
            <div style={{ width: '100%', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
               <div>{this.props.process.label}</div>
               <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                {this.props.process.actions.map((action) => <div style={{ height:'100px', width: '100px', margin: '20px'}}><img
                    style={{ height: '100px', width: '100px' }}
                    alt="Switches Logo"
                    src={
                        require(`../assets/${action.image}`)
                    }
                /> </div>)}
                </div>
            </div>
        );
    }
}


export default Process;
