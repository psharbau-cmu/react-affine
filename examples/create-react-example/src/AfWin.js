import React from 'react';
import ReactDOM from 'react-dom';

class AfWin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clientWidth:100,
            clientHeight:100
        };

        this.onresize = this.onresize.bind(this);
        this.element = false;
    }

    onresize() {
        if (!this.element) return;
        let width = this.element.clientWidth;
        let height = this.element.clientHeight;
        console.log(width, height);
        this.setState({clientWidth:width, clientHeight:height});
    }

    render() {
        return <div style={this.state.style}></div>
    }

    componentDidMount() {
        this.element = ReactDOM.findDOMNode(this);
        window.addEventListener('resize', this.onresize);
        this.onresize();
        this.componentWillReceiveProps(this.props);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onresize);
        this.element = false;
    }

    componentWillReceiveProps(nextProps) {
        let nextStyle = nextProps.style || {};
        nextStyle.position = 'relative';
        this.setState({style: nextStyle});
    }
}

export default AfWin;