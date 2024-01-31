import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) =>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter =(string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
}
  
  const updateNews= async() => {
    // props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d32025f88e754ce385882f2610139108&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    // props.setProgress(70);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    // props.setProgress(100);
    
  }
  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - The News Hunter`;
    updateNews();
  }, [])
  
  
 
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d32025f88e754ce385882f2610139108&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
  };

    return (
      <>
        <h1 className="text-center" style={{margin: '35px 0px', marginTop:'90px'}}>The News Hunter - Top Headlines on {capitalizeFirstLetter(props.category)}</h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader= {<Spinner/>}>
          <div className="container">
            <div className="row">
            { articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
            </div> 
           </div>
           </InfiniteScroll>
        
      </>
    );
  }

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "General",
};
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string,
};
export default News;
