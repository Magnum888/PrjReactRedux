const DigitalClock = function (props) {
    return <div>{props.time}</div>
}

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTime: (new Date()).toLocaleString()
        }
        this.clockLauncher()
    }

    clockLauncher(){
        setInterval(()=>{
            this.setState({
                currentTime: (new Date()).toLocaleString()
            })
        }, 1000)
    }

    render(){
        return(
            <div>
                <div>
                    <DigitalClock time={this.state.currentTime}/>
                </div>
                <h1>
                    {this.state.currentTime}
                </h1>

            </div>
        )
    }
}
ReactDOM.render(
    <div>
        <Clock/>
    </div>,
    document.getElementById("content")
);