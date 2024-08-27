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
    constructor() {
        super();
        this.state = {
            screenWidth: 0,
        };
    }
    render() {
        return (
            <div>
                <div>{this.state.screenWidth}</div>
            </div>
        );
    }
}
