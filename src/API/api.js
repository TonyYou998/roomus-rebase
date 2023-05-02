import axios from 'axios';

const mainApi=axios.create({
   
    baseURL:"http://localhost:3001/api/v1",
});

export {mainApi}