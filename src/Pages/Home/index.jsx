import React from "react";
import Banner from '../../Componentes/Banner';
import Section from "../../Componentes/Section";

const Home = () => {
    return (
        <>
            <Banner />
            <Section categoria="Front End" />
            <Section categoria="Back End" />
            <Section categoria="Mobile" />
        </>
    );
}

export default Home;
