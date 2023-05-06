import axios from 'axios';

const mainApi=axios.create({
   
    baseURL:"https://roomusapi.gzfjbzbcamc8aehr.southeastasia.azurecontainer.io:3001/api/v1",
});

export {mainApi}