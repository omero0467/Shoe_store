import React, { useReducer,useEffect,useState,createContext } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState ={
    listings: []
    
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({children})=>{
const [isLoading, setIsLoading] = useState(false)
const [state, dispatch] = useReducer(AppReducer, initialState,)

    useEffect(()=>{
        async function fetchData(){
            try{
                setIsLoading(true);
                const {data} = await axios.get('https://6373a9b9348e94729912f2b1.mockapi.io/crudMock/apartments')
                initialState.listings=[...data]
                setIsLoading(false)
            }catch(e){console.log(e);}
        }
        fetchData()
    },[])

    

    //Ations
    function removeListing (id){
        dispatch({
            type: 'remove_listing',
            payload: id
        })
    }
    function addListing (listing){
        dispatch({
            type: 'add_listing',
            payload: listing
        })
    }
    function editListing (listing){
        dispatch({
            type: 'edit_listing',
            payload: listing
        })
    }

    

     return (
        <GlobalContext.Provider value={{
            listings: state.listings,
            removeListing,
            addListing,
            editListing,
        }}>
            {children}
        </GlobalContext.Provider>
     )
}


// {
//     date: "2023-02-09T22:59:53.297Z",
//     rating: 29,
//     title: "title 1",
//     id: "1"
//    },
//    {
//     date: "2023-01-22T09:27:39.360Z",
//     rating: 64,
//     title: "title 2",
//     id: "2"
//    },
//    {
//     date: "2023-01-22T09:27:39.360Z",
//     rating: 64,
//     title: "title 3",
//     id: "3"
//    },