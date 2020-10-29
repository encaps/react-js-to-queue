import axios from 'axios';

//add some custumization via create method
export default axios.create({
    baseURL:'http://localhost:8888/'
    // headers: { 
    //     Authorization:'Client-ID HEkHuSTvqAy7KkNMH__1iEB-7MeN8HSrpfKoaT80cbg'
    //  }
});

