const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page = 1, searchTerm = "") => {
    try{
        const searchQuery = searchTerm
        ? `&name=${searchTerm}&location=${searchTerm}`
        : "";
        const res = await fetch(`${API_URL}/character/?page=${page}${searchQuery}`);

        const data = await res.json();
        return data.results;
    } catch(err){
        console.log("Error fetching characters: ", err);
    }
}