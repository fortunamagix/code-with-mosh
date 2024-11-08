// import message from "../Message.tsx";

function ListGroup() {
    let items = [
        'New York',
        'San Francisco',
        'Tokyo', 'London',
        'Paris']
    // items = []
    // const message = items.length === 0 ? <p>No item found</p> : null
    const getMessage = () => ( //better , can pass arg to this func
        items.length === 0 ? <p>Item not found</p> : null
    )
    return (
        <>
            <ul className="list-group">
                <h1>List</h1>
                {/*message*/getMessage()}
                {items.map((item, index) => <li className="list-group-item h5" key={index}
                                                onClick={() => console.log('clicked')}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListGroup