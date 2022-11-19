import axios from "axios"

export default function AppReducer (state, action) {
    switch (action.type) {
        case 'remove_listing':
            return {
                listings: state.listings.filter((item)=>item.id!==action.payload)
            }
        case 'add_listing':
            console.log(action.payload);
            handleAddListing(action.payload)
            return {
                listings: [action.payload, ...state.listings]
            }

            case 'edit_listing':
                const editedListing = action.payload
                const updatedList= state.listings.map((item)=>{
                    if(item.id === editedListing.id){
                        return editedListing
                    }
                    return item
                })

                return {
                    listings: updatedList
                }

        default:
            return state
    }
}
//  AppReducer Funcs 


async function handleAddListing(state){
try {
    const {data}= await axios.post('https://6373a9b9348e94729912f2b1.mockapi.io/crudMock/apartments', {...state})
    
} catch (error) {
    console.log(error);
}    

}

