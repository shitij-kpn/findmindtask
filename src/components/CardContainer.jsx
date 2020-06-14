import React from 'react'
import {connect} from 'react-redux'

import UserCard from './userCard'
import '../styles/cardContainer.css'

const mapStateToProps = (state) => ({
    users: state.users,
    error: state.error
})

function CardContainer({users,error}) {
    if(!users){
    return <p>{error}</p>
    }
    else{
        const userCards = users.map(user => (
            <UserCard 
                key={user.id} 
                author={user.author} 
                url={user.url} 
                download_url={user.download_url} 
            />)
        )
        return (
            <div className="card-container">
                {userCards}
            </div>
        )
    }   
}

export default connect(mapStateToProps)(CardContainer);
