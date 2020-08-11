import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Kdata = Sdata.map( (val) => {
    return(
        <Card
            title={val.title}
            imgSrc={val.imgSrc}
            link={val.link}
            epi={val.ep}
        />
    )
});

export default Kdata;