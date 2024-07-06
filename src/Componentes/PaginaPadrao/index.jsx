import { Outlet } from "react-router-dom"
import Cabecalho from "../Cabecalho"
import Rodape from "../Rodape"


const PaginaPadrao = () => {

    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
            {/* <Modal /> */}
        </>
    )
}

export default PaginaPadrao