import { useState } from "react";
import Footer from "../html/footer";
import Header from "../html/header";

export default function Search() {
  const [query, setQuery] = useState("");

  const recentSearches = ["@craig_love", "@mis_potter", "@figmadesign"];

  const users = [
    { id: 1, name: "Martha Craig", handle: "@craig_love" },
    { id: 2, name: "Figma", handle: "@figmadesign" },
    { id: 3, name: "Tabitha Potter", handle: "@mis_potter" },
  ];

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.handle.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      <Header />

      <div className="search-container">
        {/* Search Input */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Quacker"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Recent Searches */}
        {!query && (
          <div className="search-recent">
            <h4>Recent searches</h4>
            {recentSearches.map((item, index) => (
              <div key={index} className="search-item">
                {item}
              </div>
            ))}
          </div>
        )}

        {/* Results */}
        {query && (
          <div className="search-results">
            {filtered.length === 0 ? (
              <p>No results found</p>
            ) : (
              filtered.map((user) => (
                <div key={user.id} className="search-item">
                  <strong>{user.name}</strong>
                  <span>{user.handle}</span>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}
