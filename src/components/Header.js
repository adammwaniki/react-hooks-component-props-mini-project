//making a Header component that returns a header element with a h1 tag that makes use of the props.name from the blogData
//import blogData from "../data/blog";
//it seems we don't need the above line of code
//lets use destructured props by inserting the name directly as a parameter of the function by use of an object

function Header({name}){
    return(
        
        <header>
            <h1>{name}</h1>
        </header>

    );
}

export default Header