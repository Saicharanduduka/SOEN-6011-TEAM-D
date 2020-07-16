const mainContent = document.getElementById("main");
const searchField = document.getElementById("search-query");
const searchForm = document.getElementsByTagName("form")[0];
searchForm.addEventListener("submit", searchHandler);
populatePage();

/**
 * Populate page content based on the requested page title
 */
function populatePage() {
  // Read Requested Page Title from URL (No title = Home Page)
  const requestedTitle = readRequest();

  // Find Page Content Based on the Requested Title
  const pageContent = findPageContent(requestedTitle);

  // Populate The Page
  mainContent.innerHTML = displayPageContent(pageContent);
}

/**
 * Read Requested Page Title from URL (No title = Home Page)
 */
function readRequest() {
  return (
    decodeURIComponent(
      window.location.search.toString().replace("?page=", "")
    ) || "Home Page"
  );
}

/**
 * Find the appropriate content for this page
 * @param {string} requestedTitle
 */
function findPageContent(requestedTitle) {
  return content.find((item) => item.title === requestedTitle);
}

/**
 * Display the content for this page
 * @param {object} pageContent
 */
function displayPageContent(pageContent) {
  // Page Not Found
  if (!pageContent) return pageNotFoundMessage;

  // Home Page
  if (pageContent.title === "Home Page") {
    return `
      <div id="skill-title" class="col-10">
        ${pageContent.text}
      </div>
    `;
  }

  // Other Pages
  return `
      <div class="col-10">
        <h2 class="pb-3">${pageContent.title}</h2>
        ${pageContent.text}
      </div>
    `;
}

/**
 * Handle search form submission
 * @param {object} event
 */
function searchHandler(event) {
  event.preventDefault();
  const results = findResults(searchField.value);
  displayResults(results);
}

/**
 * Use Regular Expressions to find all items with the search query in their title, description or text
 * @param {string} searchQuery
 */
function findResults(searchQuery) {
  const query = new RegExp(searchQuery, "i"); // i : case insensitive

  console.log(query);

  const results = content.filter(
    (item) =>
      query.test(item.title) ||
      query.test(item.description) ||
      query.test(item.text)
  );

  return results;
}

/**
 * Display search results on the page, with an anchor link to navigate to the result page
 * @param {array of objects} results
 */
function displayResults(results) {
  let html = `
    <div id="search-results" class="col-10 text-justify">
    <p>${results.length} Result(s) Found</p>
  `;

  for (item of results) {
    html += `
      <h4>
        <a href="?page=${item.title}">${item.title}</a>
      </h4>
      <p>${item.description.slice(0, 150)}...</p>
    `;
  }

  html += `</div>`;

  mainContent.innerHTML = html;
}
