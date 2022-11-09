const Currencies = ({ currencies }) => {
    const list = []
    for(const v of Object.values(currencies)) 
        list.push(v)
    return (
        <div>
            <h3>Currencies:</h3>
            <ul>
                {list.map((c, i) => <li key={i}>{c.name} {c.symbol}</li>)}
            </ul>
        </div>
    )
}

export default Currencies