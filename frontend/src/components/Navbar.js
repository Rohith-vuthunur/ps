// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // export default function Navbar() {
// //     return (
// //         <>
// //             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
// //                 <div className="container-fluid">
// //                     <Link className="navbar-brand text-white" to="#">PS</Link>
// //                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// //                         <span className="navbar-toggler-icon"></span>
// //                     </button>
// //                     <div className="collapse navbar-collapse" id="navbarNav">
// //                         <ul className="navbar-nav">
// //                             <li className="nav-item">
// //                                 <Link className="nav-link text-white" to="/">Home</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link text-white" to="/ls">Login/Signup</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link text-white" to="/lfs">Look For Sponsors</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link text-white" to="/lts">Look to Sponsor</Link>
// //                             </li>
// //                             <li className="nav-item">
// //                                 <Link className="nav-link text-white" to="/Showlts">Show Sponsers</Link>
// //                             </li>
// //                         </ul>
// //                         <form class="d-flex">
// //                             <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
// //                             <button class="btn btn-outline-success" type="submit">Search</button>
// //                         </form>
// //                     </div>
// //                 </div>
// //             </nav>
// //         </>
// //     );
// // }
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onSearch }) {
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (onSearch) {
//             onSearch(searchQuery); // Call the search function passed from parent component
//         }
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand text-white" to="#">PS</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" to="/">Home</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" to="/ls">Login/Signup</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" to="/lfs">Look For Sponsors</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" to="/lts">Look to Sponsor</Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link className="nav-link text-white" to="/Showlts">Show Sponsors</Link>
//                         </li>
//                     </ul>
//                     <form className="d-flex ms-auto" onSubmit={handleSearch}>
//                         <input 
//                             className="form-control me-2" 
//                             type="search" 
//                             placeholder="Search content..." 
//                             aria-label="Search"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onSearch }) {
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (onSearch) {
//             onSearch(searchQuery);
//         }
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand text-white" to="#">PS</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/ls">Login/Signup</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lfs">Look For Sponsors</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lts">Look to Sponsor</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/Showlts">Show Sponsors</Link></li>
//                     </ul>
//                     <form className="d-flex ms-auto" onSubmit={handleSearch}>
//                         <input 
//                             className="form-control me-2" 
//                             type="search" 
//                             placeholder="Search in page..." 
//                             aria-label="Search"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onSearch, onNext, matchCount, currentMatchIndex }) {
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (onSearch) {
//             onSearch(searchQuery);
//         }
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
//             <div className="container-fluid">
//                 <Link className="navbar-brand text-white" to="#">PS</Link>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/ls">Login/Signup</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lfs">Look For Sponsors</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lts">Look to Sponsor</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/Showlts">Show Sponsors</Link></li>
//                     </ul>
//                     <form className="d-flex ms-auto" onSubmit={handleSearch}>
//                         <input 
//                             className="form-control me-2" 
//                             type="search" 
//                             placeholder="Search in page..." 
//                             aria-label="Search"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                         />
//                         <button className="btn btn-outline-success" type="submit">Search</button>
//                         {matchCount > 0 && (
//                             <button className="btn btn-outline-info ms-2" type="button" onClick={onNext}>
//                                 Next ({currentMatchIndex + 1}/{matchCount})
//                             </button>
//                         )}
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearch, onNext }) {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        if (onSearch) {
            onSearch(searchQuery);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="#">PS</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/ls">Login/Signup</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/lfs">Look For Sponsors</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/lts">Look to Sponsor</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Showlts">Show Sponsors</Link></li>
                    </ul>
                    <form className="d-flex ms-auto" onSubmit={handleSearch}>
                        <input 
                            className="form-control me-2" 
                            type="search" 
                            placeholder="Search in page..." 
                            aria-label="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                        <button className="btn btn-outline-info ms-2" type="button" onClick={onNext}>
                            Next
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
}
