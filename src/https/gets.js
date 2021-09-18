import axios from "axios"

function GetAxios  () {
    const params  = [...arguments];

    if(params.length === 1){
        const get =  axios(
            {
                method:'GET',
                baseURL:params[0],
                responseType:'json',
            }
        )
        return get
    }

    else {
        return {
            method:'Form how you can to use',
            param:'url'
        }
    }
}

// const GetFetch = (base)=>{

//     const url = base;

//     function get () {
//         fetch(url).then(e=>console.log(e))
//     }

//     return get

// }



export {GetAxios}