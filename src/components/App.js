import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {

  //i couldn't find a simpler way to make the code render the posts data
  const posts = blogData.posts;
  return (
    <div className="App">
      <Header/>
      <About/>
      <ArticleList posts={posts}/>
    </div>
  );
}

export default App;
