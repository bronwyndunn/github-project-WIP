import React from 'react'

const RecentCommits = ({ node: { author, committedDate, message } }) => {
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const date = new Date(committedDate)
    const displayDate = new Intl.DateTimeFormat('en-US', options).format(date)
    return (
        <div className="commit-container">
            <img
                src={author.avatarUrl}
                className="commit-author-avatar"
                alt={author.name}
            ></img>
            <div className="commit">
                <p className="commit-message">{message}</p>
                <span className="commit-info">
                    <p className="commit-author-name">{author.name}</p>
                    <span>{` committed on ${displayDate}`}</span>
                </span>
            </div>
        </div>
    )
}

export default RecentCommits
