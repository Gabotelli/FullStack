const Languages = ({ lang }) => {
    return (
        <ul>
            {lang.map(l => <li>{ l.name }</li>)}
        </ul>
    )
}

export default Languages