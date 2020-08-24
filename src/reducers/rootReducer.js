const initState={
    
    post:[
        {id:'1',title:'Lorem Morem Poku 1',body:'Body 1 Body'},
        {id:'2',title:'Lorem Morem Poku 2',body:'Body 2 Body'},
        {id:'3',title:'Lorem Morem Poku 3',body:'Body 3 Body'}
    ]

}

const rootReducer=(state=initState,action)=>{
    
    if (action.type==='DELETE_POST') {
        let newPosts=state.post.filter(post=>{
            return post.id!==action.id});
            return {
                ...state,
                post:newPosts
            };
    }    
    
    return state;
    
}

export default rootReducer;