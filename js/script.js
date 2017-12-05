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
        this.clockLauncher();
    }

    clockLauncher() {
        setInterval(() => {
            this.setState({
                currentTime: new Date().toLocaleString()
            });
        }, 1000);
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
                "h1",
                null,
                this.state.currentTime
            )
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(Clock, null)
), document.getElementById("content"));
