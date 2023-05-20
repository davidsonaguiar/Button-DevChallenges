import './styles.css'

function Group({ children }) {
    return(
        <section className='group'>
            {children}
        </section>
    )
}

export default Group;