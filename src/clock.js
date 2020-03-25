class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    componentDidMount() {
        this.interval = setInterval(
            () => {
                this.setState({
                    date: new Date()
                })
            },
            1000
        )
    }

    componentWillUnmount() {
        console.log('clock is removed')
        clearInterval(this.interval)
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
function App() {
    return (
        <div>
            <Clock />
            <Clock />
            <Clock />
        </div>
    );
}
function tick() {
    const domContainer = document.querySelector("#like_button_container");
    ReactDOM.render(<App />, domContainer);
}
tick()