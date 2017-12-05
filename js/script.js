const DigitalClock = function (props) {
    return React.createElement(
        "div",
        null,
        props.time
    );
};

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTime: new Date().toLocaleString()
        };
    }
    /*
        // Mounting events
        // події які відбуваються при установці елемента в DOM
        componentWillMount(){}
        componentDidMount(){}
    
        // Updating events
        // події які відбуваються при відновлені елемента
        componentWillReceiveProps(){}
        shouldComponentUpdate(){}
        componentWillUpdate(){}
        componentDidUpdate(){}
    
        componentWillUnmount(){}
    */
    componentWillMount() {
        console.log("element will be mount");
    }
    componentDidMount() {
        console.log("element was mount");
        this.clockLauncher();
    }
    componentWillUpdate() {
        console.log("element update");
    }
    componentWillUnmount() {
        clearInterval(this.state.diapazone);
    }

    clockLauncher() {
        let diapazone = setInterval(() => {
            console.log("time changing");
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
        this.setState({ diapazone: diapazone });
    }

    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                null,
                React.createElement(DigitalClock, { time: this.state.currentTime })
            ),
            React.createElement(
                "p",
                null,
                " Clock will be removed in ",
                this.props.seconds
            )
        );
    }
}

let seconds = 5;
let interval = setInterval(() => {
    if (seconds == 0) {
        ReactDOM.render(React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                null,
                " Clock has been removed!"
            )
        ), document.getElementById("content"));
        clearInterval(interval);
    } else {
        ReactDOM.render(React.createElement(
            "div",
            null,
            React.createElement(Clock, { seconds: seconds })
        ), document.getElementById("content"));
        seconds--;
    }
}, 1000);
