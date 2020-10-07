import Axios from 'axios'
// 24c2d48322ea42e983a590fe991f035b News api key
import axios from 'axios'

export const getNewsApi =() => {

   return Axios({
     method: 'get',
     url: 'https://newsapi.org/v2/top-headlines?country=ph',
     params: {
       apiKey: '24c2d48322ea42e983a590fe991f035b',
     },
     data: null,
   })
     .then((res) => {
    
       let articleData = res.data.articles
       return articleData
     })
     .catch((err) => {
       console.log(err.response, '--> error');
     });
}