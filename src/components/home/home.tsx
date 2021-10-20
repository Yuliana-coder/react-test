import React from "react";
import "./home.css"
import Cards from "../cards";
// import Filters from "../filters";

class Home extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
                <div className="home">
                    <div className="home-cards">
                        <Cards />
                    </div>
                </div>
        );
    }
}


export default Home;
