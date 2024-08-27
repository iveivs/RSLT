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
  constructor() {
    super()
    this.state = 0
  }
    render() {
        return (
            <div>
                <div>
                    {message} : {screenWidth}
                </div>
            </div>
        );
    }
}
