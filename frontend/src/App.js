import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Lts from './components/Lts';
import Lfs from './components/Lfs';
import LS from './components/LS';
import Login from './components/Login';
import Signup from './components/Signup';
import Showlts from './components/Showlts';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [matches, setMatches] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    highlightAndFindMatches(query);
  };

  useEffect(() => {
    highlightAndFindMatches(searchQuery);
  }, [searchQuery]);

  const highlightAndFindMatches = (query) => {
    // Remove old highlights
    document.querySelectorAll('.highlight').forEach((el) => {
      el.replaceWith(...el.childNodes);
    });

    if (!query) {
      setMatches([]);
      setCurrentMatchIndex(0);
      return;
    }

    let foundMatches = [];
    const regex = new RegExp(query, 'gi');

    const replaceTextWithSpan = (node) => {
      if (node.nodeType === 3) { // Text Node
        let match;
        let newNode = document.createDocumentFragment();
        let lastIndex = 0;
        let text = node.nodeValue;

        while ((match = regex.exec(text)) !== null) {
          newNode.appendChild(document.createTextNode(text.substring(lastIndex, match.index)));

          const span = document.createElement('span');
          span.className = 'highlight';
          span.textContent = match[0];
          newNode.appendChild(span);

          foundMatches.push(span);
          lastIndex = regex.lastIndex;
        }

        newNode.appendChild(document.createTextNode(text.substring(lastIndex)));
        node.replaceWith(newNode);
      } else if (node.nodeType === 1 && node.childNodes) { // Element Node
        Array.from(node.childNodes).forEach(replaceTextWithSpan);
      }
    };

    replaceTextWithSpan(document.body);

    setMatches(document.querySelectorAll('.highlight'));
    setCurrentMatchIndex(0);

    if (foundMatches.length > 0) {
      scrollToMatch(0);
    }
  };

  const scrollToMatch = (index) => {
    if (matches.length > 0) {
      matches.forEach((el) => el.classList.remove('current-match'));
      const matchElement = matches[index];

      if (matchElement) {
        matchElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        matchElement.classList.add('current-match');
      }
    }
  };

  const goToNextMatch = () => {
    if (matches.length === 0) return;
    let newIndex = (currentMatchIndex + 1) % matches.length;
    setCurrentMatchIndex(newIndex);
    scrollToMatch(newIndex);
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} onNext={goToNextMatch} matchCount={matches.length} currentMatchIndex={currentMatchIndex} />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lts" element={<Lts />} />
          <Route path="/lfs" element={<Lfs />} />
          <Route path="/ls" element={<LS />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Showlts" element={<Showlts />} />
        </Routes>
      </div>

      <style>
        {`
          .highlight {
            background-color: yellow;
            color: black;
            font-weight: bold;
            padding: 2px;
            border-radius: 3px;
          }
          .current-match {
            background-color: orange;
          }
        `}
      </style>
    </Router>
  );
}
