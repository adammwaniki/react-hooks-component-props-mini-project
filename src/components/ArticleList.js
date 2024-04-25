//ArticleList will take in the posts props as parameters of its function
//we will use the map method so that we can return each article component in the posts using their id
//we will need to import the articles from the Article component since it is a child of  this one


import Article from './Article';

function ArticleList ({posts}) {
    const articles = posts.map((post, id) => (
        <Article key={id} {...post} />
    ));
    return(
        <main>
            {articles}
        </main>
    );
}
export default ArticleList