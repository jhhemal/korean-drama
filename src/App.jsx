import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import Kdata from "./Kdata";


const App = () => {
    return (
        <>
            <h1 className="text-center header">Favorite Korean Dramas</h1>
            <div className="container">
                {Kdata}
            </div>
        </>
    );
};

export default App;
