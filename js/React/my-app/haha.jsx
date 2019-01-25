goog.provide('wap.ui.social.haha');

wap.ui.social.haha = function () {
    const element = (
        <h1 className="greeting">
            Hello, world!
        </h1>
    );
}

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
}


wap.ui.social.aaaa = Clock;

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);