import {useState} from 'react';
import SeachBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from './Api';
function App(){
    const [images, setImages] = useState([]);
    const handleSubmit = async (term) => {
       const result= await searchImages(term);
       setImages(result);
       console.log (result);
    }
    return (
    <div> 
        <SeachBar onSubmit = {handleSubmit}></SeachBar> 
        <ImageList images ={images}/>
        </div>
        );
}

export default App;