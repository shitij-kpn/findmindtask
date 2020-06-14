import React from 'react'
import {connect} from 'react-redux'
import {requestUsers} from './../actions/userAction'
import UserCard from './userCard'
import '../styles/cardContainer.css'

const mapStateToProps = (state) => ({
    users: state.users,
    error: state.error
})

function CardContainer({users,error,dispatch}) {
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
            <>
                <div className="card-container">
                    {userCards}
                </div>
                <button className="button-style" onClick={() => dispatch(requestUsers())}>Load other images</button>
            </>
        )
    }   
}

export default connect(mapStateToProps)(CardContainer);
