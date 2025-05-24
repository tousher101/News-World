import { useState, useEffect } from "react";
import { useNews } from "../ContextApp/NewsContext";
import NewCard from "../Component/NewCard";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const baseUrl = import.meta.env.VITE_NEWS_BASE_URL;

 const Home = ({category})=>{
    const [page, setPage]=useState(1);
    const {newsStore, setNewsStore}=useNews();
    const key = `${category}-${page}`;
    const articles = newsStore[key]
    const [data,setData]=useState(null)
    const {progress,setProgress}=useNews();
 

    useEffect(()=>{
        if(articles) return;
         setProgress(30)
        fetch(`${baseUrl}/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=20&apiKey=${apiKey}`)
        .then(resp=>resp.json())
        .then (data=>{
           setProgress(60);
           
            if(data.articles) {
            setNewsStore(prev=>({...prev,[key]:data.articles}));
            }    
         setProgress(100)
        setData(data)
        });
    
    }),[category,page]
    if (!articles) return 

    const handleNext=()=>{
            const totalPage = Math.ceil(data.totalResults/20);
            if(page < totalPage){setPage(prev=>prev+1)}else{alert('No page Available')}      
            }
        const capital = (str)=>{
                return str.charAt(0).toUpperCase()+str.slice(1)
            }
         document.title=`News World-${capital(category)}`

                
                
        
    return(
        <>
     
        <h2 className="lg:text-3xl p-[10px] md:text-2xl text-2xl text-center text-gray-600 mt-[80px]">News World-Top {capital(category)} Headlines</h2>
        <div className="max-w-[1380px] m-auto justify-center items-center lg:grid-cols-3 md:grid grid-cols-2 sm:grid grid-cols-1 ">
            {articles.map((arti,i)=>{
                return <div key={i}>
                    <NewCard imgUrl={arti.urlToImage} title ={arti.title} description = {arti.description} fullNews = {arti.url} newsDate={arti.publishedAt} source={arti.source.name}/>
                </div>
            })}
           
        </div>
        <div className="flex justify-around mt-[50px]">
            <button disabled={page<=1} onClick={()=>{setPage(p=> p -1, 1)}} className="bg-green-600 w-[150px] h-[50px] rounded-2xl cursor-pointer">&larr; Previous</button>
            <button onClick={handleNext} className="bg-green-600 w-[150px] h-[50px] rounded-2xl cursor-pointer">Next &rarr; </button>
        </div>
        </>
    )
}
    

export default Home