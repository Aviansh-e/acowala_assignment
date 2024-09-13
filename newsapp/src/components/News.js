
// export default News;

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import to access the URL query
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1); // Current page state
    const [totalResults, setTotalResults] = useState(0); // Total results from the API
    const location = useLocation(); // To access the URL query

    // Function to get query params from URL
    const getQueryParam = (param) => {
        const searchParams = new URLSearchParams(location.search);
        return searchParams.get(param);
    };

    // Fetch news based on category or search term
    const newsUpdate = async (pageNumber) => {
        const searchQuery = getQueryParam('search'); // Get the search term from URL
        props.setProgress(0);
        let url = `https://gnews.io/api/v4/${searchQuery ? `search?q=${searchQuery}` : `top-headlines?q=${props.category}`}&lang=${props.language}&country=${props.country}&apikey=${props.apiKey}&page=${pageNumber}&max=${props.pageSize}`;
        props.setProgress(30);
        setLoading(true);
        let result = await fetch(url);
        props.setProgress(60);
        let parsedData = await result.json();
        props.setProgress(90);

        if (parsedData.articles) {
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
        } else {
            setArticles([]);
        }
        setLoading(false);
        props.setProgress(100);
    };

    useEffect(() => {
        newsUpdate(page); // Fetch news when the component mounts or when the page changes
        // eslint-disable-next-line
    }, [page, location.search]); // Re-fetch news when page or search term changes

    // Function to handle "Next" button click
    const handleNextClick = () => {
        if (page + 1 <= Math.ceil(totalResults / props.pageSize)) {
            setPage(page + 1); // Increment the page
        }
    };

    // Function to handle "Previous" button click
    const handlePrevClick = () => {
        if (page > 1) {
            setPage(page - 1); // Decrement the page
        }
    };

    return (
        <>
            <h2 className="text-center" style={{ margin: '35px 0' }}>
                News App - Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines
            </h2>
            {loading && <Spinner />}
            <div className="container">
                <div className="row">
                    {articles.length > 0
                        ? articles.map((element, index) => (
                            <div className="col-md-4" key={index}>
                                <NewsItem
                                    title={element?.title || 'No Title'}
                                    description={element?.description || 'No Description'}
                                    imgUrl={element?.image || 'defaultImageURL'}
                                    newsUrl={element?.url || '#'}
                                    author={element?.author || 'Unknown'}
                                    date={element?.publishedAt || 'No Date'}
                                />
                            </div>
                        ))
                        : <h4>No News Available</h4>}
                </div>
            </div>

            {/* Pagination controls */}
            <div className="container d-flex justify-content-between">
                <button
                    disabled={page <= 1}
                    className="btn btn-dark"
                    onClick={handlePrevClick}>
                    &larr; Previous
                </button>
                <button
                    disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
                    className="btn btn-dark"
                    onClick={handleNextClick}>
                    Next &rarr;
                </button>
            </div>
        </>
    );
};

News.defaultProps = {
    country: 'in',
    pageSize: 6, // Number of news articles per page
    category: 'general',
    language: 'en',
    apiKey: 'YOUR_API_KEY',
};

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    language: PropTypes.string,
    apiKey: PropTypes.string.isRequired,
};

export default News;

