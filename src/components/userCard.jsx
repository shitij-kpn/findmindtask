import React from 'react'
import '../styles/users.css'

function UserCard({url,author,download_url,}) {
    return (
        <div className='UserCard'>
            <div className='UserCardTop'>
                <img src={download_url} alt="user-card"/>
            </div>
            <div className='UserCardBottom'>
                <h4 className="UserName">Author : {author}</h4>
                <div>
                    <a href={download_url} target="_blank" rel="noopener noreferrer"  download>Download</a>
                </div>
            </div>
        </div>
    )
}

export default UserCard
