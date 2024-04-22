/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react'

import { Link, useParams } from 'react-router-dom'
// import './RepoDetails.css';

const RepoDetails = () =>{
    const { repoId} = useParams();
    const [repo, setRepo] = useState(null);
    
    const [loading, setLoading] = useState(true);

    useEffect (() =>{
        const fetchRepo = async () =>{
            try{
                const response = await fetch(`https://api.github.com/repositories/${repoId}`);
                if (!response.ok){
                    throw new Error("Failed to fetch repository details");
                }
                const data = await response.json();
                setRepo(data);
                setLoading(false);
            

            } catch (error) {
                console.error(error);
                setLoading(false);

            }
            
            
        };

        fetchRepo();

    }, [repoId]);

    if (loading) {
        return <p>Loading....</p>;
    }

    if (!repo) {
        return <p>Repository not found.</p>;
    }

    return(
        <div className='repository-details-container'>
            
                <div>
                    <h2>{repo.name}</h2>
                    <p>Description: {repo.description}</p>
                    <p>Language: {repo.language}</p>
                    <p>Stars: {repo.stargazers_count}</p>
                    <p>Watchers: {repo.watchers_count}</p>
                    <p>Forks: {repo.forks_count}</p>
                    <p>Open Issues: {repo.open_issues_count}</p>
                    <p>Default Branch: {repo.default_branch}</p>
                    <p>Created At: {new Date(repo.created_at).toLocaleDateString()}</p>
                    <p>Last Updated At: {new Date(repo.updated_at).toLocaleTimeString()}</p>
                    <p>License: {repo.license ? repo.license.name : "No License"}</p>
                    <p>Owner: {repo.owner.login}</p>
                    <p>Size: {repo.size}</p>
                    <p>Subscribers: {repo.subscribers_count}</p>
                    <Link to="/">
                        <button>Home Page</button>
                    </Link>
                </div>

            
        </div>
    );
};

export default RepoDetails