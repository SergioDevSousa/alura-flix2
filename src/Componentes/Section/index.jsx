import Tag from "../Tag"


const Section = ({ children, categoria }) => {
    return (
        <section>
            <Tag titulo={categoria}>
                {categoria}
            </Tag>
            {children}
        </section>
    )
}

export default Section