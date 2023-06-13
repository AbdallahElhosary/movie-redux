import { ALLMOVIES, allMovieAPI } from "../type/moviesType"
import axios from "axios"

export const getTheWholeMovies = () => {
    return async (dispatch) => {
        const res = await axios.get(allMovieAPI)
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}

export const getSearchedMovies = (word) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=1f19f83b65c26b7010541b6da90b5bf0&query=${word}&language=en-Us`)
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}


export const getPaginateMovies = (url) => {
    return async (dispatch) => {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1f19f83b65c26b7010541b6da90b5bf0&language=en/US&page=${url}`)
        dispatch({ type: ALLMOVIES, data: res.data.results, pages: res.data.total_pages })

    }
}