/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react';
import { Paginator } from 'primereact/paginator';
import {Link} from 'react-router-dom';

// // import './GitHubRepo.css';

 const GitHubRepo = () => {
     const [repos, setRepos] = useState([]);
     const [loading, setLoading] = useState(true);
    //  const [search, setSearch] = useState("");
    //  const [filteredRepos, setFilteredRepos] = useState([]);
    const [totalPages, setTotalPages] = useState(null);
     const [page, setPage] = useState(0);
     const [perPage, setperPage] = useState(5);

     useEffect(() => {
         const fetchRepos = async () => {
             const response = await fetch(`https://api.github.com/users/teefeh07/repos?page=${page}&per_page=${perPage}`);
             const data = await response.json();
             setRepos(data);
         };

         fetchRepos();
     }, [page, perPage]);

     const handleNextPage = () =>{
         setPage(Math.min(page + 1));
     };

     const handlePrevPage = () => {
         setPage(Math.max(page - 1, 0));
     };

     const handlePerPageChange = (e) => {
         setperPage(Number(e.target.value));
         setPage(1);
     };

    //  if (loading) {
    //     return <p>Loading...</p>
    //  }

     return (
         <div className='repositories-container'>
             <h1>GitHub Repositories</h1>
             <div>
             <button onClick ={handlePrevPage} disabled ={page === 1}>Previous Page</button>
             <span>Page: {page }</span>
             <button onClick ={handleNextPage} disabled={page === totalPages}>Next Page</button>
            
            </div>
             <ul>
                 {repos.map(repo => (
                     <li key = {repo.id}>
                         <Link to ={`/repo/${repo.id}`}>{repo.name}</Link>
                     </li>
                 ))}
             </ul>
         </div>
     );
    

 };

 export default GitHubRepo;







