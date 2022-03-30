import React from "react";
import {  homeObjectFist } from "./Info";
import DataBlock from "../../Compopnent/DataBlocks/Datablock";
import { Button } from "../../GlobleStyle";


const Home = () => {
    return (
        <>
        <DataBlock {...homeObjectFist } />
       
    

        {/*<DataBlock {...homeObjectThird } />
        <DataBlock {...homeObjectFourth } />
    */}
        </>
    )
}

export default Home;


