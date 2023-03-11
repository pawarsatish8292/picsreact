import axios from 'axios'   ;
const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
        Authorization: 'Client-ID Zw924Hatqv30xvMC72txEOG98-T2N7flCrMOrdWloaE'
        },
        params:{  
            query: term,
        },
    });

    return response.data.results;
};

export default searchImages;