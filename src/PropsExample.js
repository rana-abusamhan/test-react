

function PropsExample(props){
    console.log(props)
    const {name,age} = props; //De-structuring assignment
    return(
        <>
        <h3>Props Example</h3>
        <p>{name}</p>
        <h1>{age}</h1>
        </>
    )
}

export default PropsExample;