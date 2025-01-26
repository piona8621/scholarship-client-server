import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://scholarship-server-project.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;
};

export default UseAxiosPublic;
