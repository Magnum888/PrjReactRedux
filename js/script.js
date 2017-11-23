//let heading = <h1> Hello World!!!!!!! </h1>;
let value = 2;
let background = { backgroundColor: "green" };

class Title extends React.Component {
    getUrl() {
        return "https://google.com";
    }
    render() {
        if (value === 1) {
            return React.createElement(
                "h1",
                { title: this.props.title },
                "Hi my dear ",
                this.props.userName,
                " user ",
                this.getUrl()
            );
        } else {
            return React.createElement(
                "h2",
                { style: background, className: "title_name", title: this.props.title },
                "Hi my dear ",
                this.props.userName,
                " user ",
                this.getUrl()
            );
        }
    }
}
class HelloWorld extends React.Component {
    render() {
        let my = "My";
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "Hello ",
                my,
                " World!"
            ),
            React.createElement(
                "h1",
                null,
                "Time ",
                new Date(Date.now()).toLocaleTimeString(),
                " now"
            )
        );
    }
}
ReactDOM.render(React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, null),
    React.createElement(Title, { title: "user", userName: "Jim" })
),
//heading,
document.getElementById("content"));
