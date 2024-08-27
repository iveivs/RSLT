import { Component } from "react";
import Field from "./components/Field/Field";
import Information from "./components/Information/Information";

class App extends Component {
    render() {
        return (
            <>
                <Information />
                <Field />
            </>
        );
    }
}

export default App
