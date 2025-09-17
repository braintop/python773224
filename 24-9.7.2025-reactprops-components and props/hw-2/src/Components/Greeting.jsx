export function Greeting(props){
    console.log(props)
    //1. properties 
    //2. functions 
    //3. js + html 

    return(
        <div>
            <h1>welcome  {props.firstname} {props.lastname}</h1>
        </div>
    )

}