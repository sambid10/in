import { useState,useEffect} from "react";

export default function useMousePosition(){
    const [mousepos,setMousepos]=useState({x:0,y:0})
    const updateMousePos=(e:MouseEvent)=>{
        setMousepos({x:e.clientX,y:e.clientY})
    }
    useEffect(()=>{
        window.addEventListener("mousemove",updateMousePos)
        return ()=>{
            window.removeEventListener("mousemove",updateMousePos)
        }
    },[])
    return mousepos
}