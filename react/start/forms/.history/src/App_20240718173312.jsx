import { useState } from "react";
import "./App.css";

function App() {
    return (
        <>
            <h1>Forms</h1>
            < Select options={productOptions} defaultValue={productOptions[0]}/>
            < Select isMulti options={colorOptions} defaultValue={[colorOptions[0], colorOptions[1]]}/>
        </>
    );
}

export default App;
