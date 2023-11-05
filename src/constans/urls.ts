const baseURL ='https://api.themoviedb.org/3'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYjAwNWExYmFkZThlNmVlZjI5ZmE1ZGMyYjkwMzE1NCIsInN1YiI6IjY1NDY2ZDI2Mjg2NmZhMDBlMWVlY2YxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mEcL-nRVjGcNSy7vtLTJyIFkognHEVufcUdCLwmEKKw'
const movies= '/discover/movie'
const movie='/movie'

const urls = {
    movies:movies,
    info:{
        byId:(id:number)=>`${movie}/${id}`
    }
}

export {token, baseURL, urls}