class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date:new Date()};
    }

    componentDidMount() {
        var _this = this;
        var interval = setInterval(function() {
            _this.state.date = new Date();
        },1000)
    }

    componentWillUnmount() {
        if (interval) {
            console.log('interval exisiting');
            clearInterval(interval);
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

function tick() {
    const domContainer = document.querySelector("#like_button_container");
    ReactDOM.render(<Clock  />, domContainer);
}

setInterval(tick, 1000);