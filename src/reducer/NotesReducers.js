
export const initialState = [
   {title:"title", content:"hello"}
]


export const reducer = (state,{type,payload}) => {
    switch(type){
        case"Add" :
            return[...state,{id:Math.random(),title:payload.title , content:payload.content}] 

        case"Remove":
        return state.filter((note)=>payload !== note.id)

        case"Update":
            return state.map(record => {
                 if (payload.id === record.id) 
                 return payload
                 else
                 return record
            })
            default:
            return state
        }
   
   
}