//this component is a child of the ArticleList component
//we will create a function that returns an article element it will take in three props as its parameters, namely title, date, and preview
//the function will return an article element with the following structure
//inside the article element is an h3 tag with the title of the article passed in as a prop called title 
//inside the article element is a small element displaying the date of the article passed in as a prop called date with a defualt value of January 1, 1970
//inside the article element is a p tag with the preview of the article passed in as a prop called preview


function Article ({title,date="January 1, 1970",preview}) {
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}
export default Article;