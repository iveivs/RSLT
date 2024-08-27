import { useState, useEffect, Component } from "react";
import "./App.css";

function App({ message }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        console.log(message);

        const updateScreenWidth = () => setScreenWidth(window.innerWidth);

        window.addEventListener("resize", updateScreenWidth);
        return () => window.removeEventListener("resize", updateScreenWidth);
    }, []);
    return (
        <div>
            <div>
                {message} : {screenWidth}
            </div>
        </div>
    );
}

export default App;

export class OldApp extends Component {
    // const state = 0 можно было бы объявить и так
    constructor(props) {
        super(props); //в конструкторе не обязательно указывать пропсы, если они там не используются, но это правило хорошего тона
        console.log('message', props.message); // эта строчка будет выполнена перед монтированием.(если вдруг такое нужно)
        this.state = {
            screenWidth: window.innerWidth,
        };
    }
    componentDidMount() {
      console.log('message', this.props.message);
    }

    render() {
        return (
            <div>
                <div>{this.props.message} : {this.state.screenWidth}</div>
            </div>
        );
    }
}
