const Languages = ({ lang }) => { 
    const list = []
    for(const k of Object.values(lang))//this is the only way I found to iterate over values, because restCountriesv3 was giving me problemas while doing a map of the languages
        list.push(k)
    return (
        <ul>
            {list.map((l, i) => <li key={i}>{ l }</li>)}
        </ul>
    )
}

export default Languages