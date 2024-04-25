//let's use destructured props here as well for ease of writing
//the About component returns an aside element
//the aside element has an image inside it that uses a prop for its src, we will also assign it a default value
//the aside element also has a p tag inside it that uses a prop called about for its text
// we will then export it

function About ({image="https://via.placeholder.com/215", about}) {
    return(
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}

export default About
