import Banner from '../../Componentes/Banner';
import Section from '../../Componentes/Section';
import { useContext } from "react";
import { ContextoExemplo } from '../../Componentes/Contexto';



const Home = () => {

    const { toggleModal, categorias } = useContext(ContextoExemplo);

    return (
        <>
            <Banner />
            <main>
                {categorias.map(categoria => (
                    <Section key={categoria.nome} categoria={categoria.nome}>
                        Card
                    </Section>
                ))}
            </main>

            <button onClick={(e) => {
                e.preventDefault();
                toggleModal();
            }}>
                Aperte para abrir
            </button>
        </>
    )
}

export default Home
