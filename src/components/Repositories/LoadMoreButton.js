import { hot } from 'react-hot-loader/root'
import React from 'react'

const LoadMoreButton = ({ fetchMore, endCursor }) => (
    <button
        className="search-button"
        onClick={() =>
            fetchMore({
                variables: {
                    after: endCursor
                },
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    const newEdges = fetchMoreResult.search.edges
                    const pageInfo = fetchMoreResult.search.pageInfo
                    return {
                        search: {
                            __typename: previousResult.search.__typename,
                            edges: [
                                ...previousResult.search.edges,
                                ...newEdges
                            ],
                            pageInfo
                        }
                    }
                }
            })
        }
    >
        Load More
    </button>
)

export default LoadMoreButton
