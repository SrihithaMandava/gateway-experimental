import React from 'react';
import PropTypes from 'prop-types';

class SelectedProcess extends React.Component {
    static propTypes = {
        primaryColor: PropTypes.string,
    };


    state={
        next: 0,
        showSuccess: false,
    }

    startProcess = () => {
        setTimeout(() => this.setState({ showSucess: false }), 1000);
        
        if(this.state.next === this.props.selectedProcess.actions.length - 1){
            this.setState({ showSuccess: true, next: 0 })  
        }
        else{
            this.setState({ showSuccess: true, next: this.state.next + 1 })
        } 

        setTimeout(() => this.setState({ showSuccess: false }), 3000);
    }

    render() {
        return (
            <div style={{ width: '80%', height: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                <div style={{ display: 'flex', flexDirection:'column',alignItems:'center', marginTop: '20px' }}>
                      <div onClick={this.startProcess}>
                      {!this.state.showSuccess && <img
                        style={{ height: '300px', width: '300px', borderRadius: '10px' }}
                        alt="scan"
                        src={
                            require(`../assets/${this.props.selectedProcess.actions[this.state.next].image}`)
                        }
                    /> }
                    {this.state.showSuccess && <img
                        style={{ height: '300px', width: '300px' }}
                        alt="scan"
                        src={
                            require(`../assets/success_nfc.png`)
                        }
                    />}
                        </div>
                </div>
            </div>
        );
    }
}


export default SelectedProcess;