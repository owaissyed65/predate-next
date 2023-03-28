const fetchApi = async (url) => {
    const data = await fetch(url);
    const parseData = await data.json()
    return parseData;

}
export default fetchApi