import React from "react";
import {Link} from "react-router-dom";
import TitleSearch from "./TitleSearch";
import {TitlePage} from "./TitlePage";

export default function TitlePageWrapper() {
    return (
        <div className="xyz">
        <Link style={{marginRight: "10px"}} to="/">&lt; Home</Link>
            <div className="center-data2">

                <TitleSearch/>
            </div>
            <hr/>
            <TitlePage/>
        </div>
    );
}


