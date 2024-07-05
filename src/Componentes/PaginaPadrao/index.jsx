import { Outlet } from "react-router-dom"
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"
import Banner from "../Banner"


const PaginaPadrao = () => {

    return (
        <>
            <Cabecalho />
            <Banner />
            <Outlet />
            <Rodape />
            {/* <Modal /> */}
        </>
    )
}

export default PaginaPadrao