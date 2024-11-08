function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'Tokyo', 'London',
        'Paris']

    return (
        <>
            <ul className="list-group">
                {items.map(i =>
                    <li>{i}</li>
                )}

            </ul>
        </>
    )
}

export default ListGroup