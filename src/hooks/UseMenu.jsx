import axios from "axios";
import { useEffect, useState } from "react";

const UseMenu = () => {
    const [menues,setMenues] = useState([]);
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
       axios('../../public/menu.json')
        .then(res=>{
            const menuData = res.data;
            setMenues(menuData);
            setLoading(false)
        })
        .catch(err=>console.log(err.message))
    },[])
    return [menues,loading]
}

export default UseMenu;