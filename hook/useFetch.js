import { useEffect, useState } from 'react'
import fetchApi from './fetchApi'
const useFetch = (url) => {
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        fetchApi(url).then((data) => {
            setBlog(data)
        })
    }, [url])
    return { blog }
}
export default useFetch
