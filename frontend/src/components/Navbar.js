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





// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onSearch, onNext }) {
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
//                         <button className="btn btn-outline-info ms-2" type="button" onClick={onNext}>
//                             Next
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }











// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onSearch, onNext }) {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isNavbarOpen, setIsNavbarOpen] = useState(false);

//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (onSearch) {
//             onSearch(searchQuery);
//         }
//     };

//     // Toggle navbar collapse
//     const toggleNavbar = () => {
//         setIsNavbarOpen(!isNavbarOpen);
//     };

//     // Close navbar when a link is clicked (on mobile)
//     const closeNavbar = () => {
//         setIsNavbarOpen(false);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand text-white" to="#">PS</Link>
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     onClick={toggleNavbar} 
//                     aria-expanded={isNavbarOpen} 
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item"><Link className="nav-link text-white" to="/" onClick={closeNavbar}>Home</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/ls" onClick={closeNavbar}>Login/Signup</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lfs" onClick={closeNavbar}>Look For Sponsors</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lts" onClick={closeNavbar}>Look to Sponsor</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/Showlts" onClick={closeNavbar}>Show Sponsors</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/Showlfs" onClick={closeNavbar}>Show Organizations</Link></li>
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
//                         <button className="btn btn-outline-info ms-2" type="button" onClick={onNext}>
//                             Next
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }







// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar({ onSearch }) {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [isNavbarOpen, setIsNavbarOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [matches, setMatches] = useState([]);

//     // Function to search occurrences in the page
//     const handleSearch = (e) => {
//         e.preventDefault();
//         if (searchQuery.trim() === '') return;

//         const bodyText = document.body.innerText.toLowerCase();
//         const indices = [];
//         let startIndex = 0;

//         while ((startIndex = bodyText.indexOf(searchQuery.toLowerCase(), startIndex)) !== -1) {
//             indices.push(startIndex);
//             startIndex += searchQuery.length;
//         }

//         setMatches(indices);
//         setCurrentIndex(0);
//         highlightOccurrences(0);
//     };

//     // Function to highlight search occurrences
//     const highlightOccurrences = (index) => {
//         if (matches.length === 0) return;
        
//         const selection = window.getSelection();
//         selection.removeAllRanges();
        
//         const range = document.createRange();
//         const nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
//         let startIndex = 0, node;

//         while ((node = nodeIterator.nextNode())) {
//             const nodeText = node.nodeValue.toLowerCase();
//             const pos = nodeText.indexOf(searchQuery.toLowerCase());

//             if (pos !== -1) {
//                 if (startIndex === index) {
//                     range.setStart(node, pos);
//                     range.setEnd(node, pos + searchQuery.length);
//                     selection.addRange(range);
//                     node.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//                     return;
//                 }
//                 startIndex++;
//             }
//         }
//     };

//     // Function to navigate up and down through occurrences
//     const navigateOccurrences = (direction) => {
//         if (matches.length === 0) return;
        
//         let newIndex = currentIndex + direction;
//         if (newIndex < 0) newIndex = matches.length - 1;
//         if (newIndex >= matches.length) newIndex = 0;
        
//         setCurrentIndex(newIndex);
//         highlightOccurrences(newIndex);
//     };

//     return (
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//             <div className="container-fluid">
//                 <Link className="navbar-brand text-white" to="#">PS</Link>
//                 <button 
//                     className="navbar-toggler" 
//                     type="button" 
//                     onClick={() => setIsNavbarOpen(!isNavbarOpen)} 
//                     aria-expanded={isNavbarOpen} 
//                     aria-label="Toggle navigation"
//                 >
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
//                     <ul className="navbar-nav">
//                         <li className="nav-item"><Link className="nav-link text-white" to="/" onClick={() => setIsNavbarOpen(false)}>Home</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/ls" onClick={() => setIsNavbarOpen(false)}>Login/Signup</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lfs" onClick={() => setIsNavbarOpen(false)}>Look For Sponsors</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/lts" onClick={() => setIsNavbarOpen(false)}>Look to Sponsor</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/Showlts" onClick={() => setIsNavbarOpen(false)}>Show Sponsors</Link></li>
//                         <li className="nav-item"><Link className="nav-link text-white" to="/Showlfs" onClick={() => setIsNavbarOpen(false)}>Show Organizations</Link></li>
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
//                         <button className="btn btn-outline-light ms-2" type="button" onClick={() => navigateOccurrences(-1)}>
//                             ▲
//                         </button>
//                         <button className="btn btn-outline-light ms-2" type="button" onClick={() => navigateOccurrences(1)}>
//                             ▼
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }












import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ onSearch }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [matches, setMatches] = useState([]);
    const [showSearch, setShowSearch] = useState(true);

    // Detect screen size to show/hide search bar
    useEffect(() => {
        const handleResize = () => {
            setShowSearch(window.innerWidth >= 768); // Show only on tablets and laptops
        };
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Function to search occurrences in the page
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim() === '') return;

        const bodyText = document.body.innerText.toLowerCase();
        const indices = [];
        let startIndex = 0;

        while ((startIndex = bodyText.indexOf(searchQuery.toLowerCase(), startIndex)) !== -1) {
            indices.push(startIndex);
            startIndex += searchQuery.length;
        }

        setMatches(indices);
        setCurrentIndex(0);
        highlightOccurrences(0);
    };

    // Function to highlight search occurrences
    const highlightOccurrences = (index) => {
        if (matches.length === 0) return;
        
        const selection = window.getSelection();
        selection.removeAllRanges();
        
        const range = document.createRange();
        const nodeIterator = document.createNodeIterator(document.body, NodeFilter.SHOW_TEXT);
        let startIndex = 0, node;

        while ((node = nodeIterator.nextNode())) {
            const nodeText = node.nodeValue.toLowerCase();
            const pos = nodeText.indexOf(searchQuery.toLowerCase());

            if (pos !== -1) {
                if (startIndex === index) {
                    range.setStart(node, pos);
                    range.setEnd(node, pos + searchQuery.length);
                    selection.addRange(range);
                    node.parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }
                startIndex++;
            }
        }
    };

    // Function to navigate up and down through occurrences
    const navigateOccurrences = (direction) => {
        if (matches.length === 0) return;
        
        let newIndex = currentIndex + direction;
        if (newIndex < 0) newIndex = matches.length - 1;
        if (newIndex >= matches.length) newIndex = 0;
        
        setCurrentIndex(newIndex);
        highlightOccurrences(newIndex);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="#">PS</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)} 
                    aria-expanded={isNavbarOpen} 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item"><Link className="nav-link text-white" to="/" onClick={() => setIsNavbarOpen(false)}>Home</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/ls" onClick={() => setIsNavbarOpen(false)}>Login/Signup</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/lfs" onClick={() => setIsNavbarOpen(false)}>Look For Sponsors</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/lts" onClick={() => setIsNavbarOpen(false)}>Look to Sponsor</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Showlts" onClick={() => setIsNavbarOpen(false)}>Show Sponsors</Link></li>
                        <li className="nav-item"><Link className="nav-link text-white" to="/Showlfs" onClick={() => setIsNavbarOpen(false)}>Show Organizations</Link></li>
                    </ul>

                    {/* Show search bar only on laptop/tablet screens */}
                    {showSearch && (
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
                            <button className="btn btn-outline-light ms-2" type="button" onClick={() => navigateOccurrences(-1)}>
                                ▲
                            </button>
                            <button className="btn btn-outline-light ms-2" type="button" onClick={() => navigateOccurrences(1)}>
                                ▼
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}

