import axios from 'axios'   ;
const searchImages = async () => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
        Authorization: 'Client-ID Zw924Hatqv30xvMC72txEOG98-T2N7flCrMOrdWloaE'
        },
        params:{  
            query:'cars'
        },
    });
    console.log(response);

    return response;
};

export default searchImages;