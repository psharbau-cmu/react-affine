import React from 'react';

class AfWin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:{position:'relative', display:'box', width:props.width + 'px', height:props.height + 'px'}
        };
    }

    componetWillReceiveProps(props) {
        this.setState({
            style:{position:'relative', display:'box', width:props.width + 'px', height:props.height + 'px'}
        });
    }

    render() {
        console.log(this.state);
        return (
            <div style={this.state.style}>
                {React.Children.map(this.props.children, child => React.cloneElement(child, {width:this.props.width / 2}))}
            </div>
        );
    }
}

export default AfWin; 