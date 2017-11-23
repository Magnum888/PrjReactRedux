//let heading = <h1> Hello World!!!!!!! </h1>;
let value = 2;
let background = {backgroundColor: "green"};

class Title extends React.Component{
    getUrl(){
        return(
            "https://google.com"
        )
    }
    render(){
        if (value === 1){
            return(
                <h1 title={this.props.title}>
                    Hi my dear {this.props.userName} user {this.getUrl()}
                </h1>
            )
        }else {
            return(
                <h2 style={background} className="title_name" title={this.props.title}>
                    Hi my dear {this.props.userName} user {this.getUrl()}
                </h2>
            )
        }

    }
}
class HelloWorld extends React.Component{
    render(){
        let my = "My";
        return(
            <div>
                <h1>
                    Hello {my} World!
                </h1>
                <h1>
                    Time {new Date(Date.now()).toLocaleTimeString()} now
                </h1>
            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <HelloWorld/>
        <Title title="user" userName="Jim"/>
    </div>,
    //heading,
    document.getElementById("content")
);