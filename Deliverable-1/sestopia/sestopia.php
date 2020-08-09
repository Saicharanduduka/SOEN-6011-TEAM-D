<?php

// include composers autoloader
require_once("vendor/autoload.php");

// MEEKRO - database variables
DB::$host = "localhost";
DB::$user = "root";
DB::$password = "";
DB::$dbName = "epiz_26274222_Sestopia_db";
DB::$encoding = "utf8";


class sestopia
{

    function __construct()
    {
    }

    /**
     * Get page content info from DB based on Page Title
     * @param $pageTitle
     * @return mixed: Assoc.array containing 1 DB row
     */
    public function fetchPageContentByTitle($pageTitle)
    {
        return DB::queryOneRow("SELECT * FROM skills WHERE title = %s", $pageTitle);
    }


    /**
     * Get all skill titles from DB to display on the HomePage
     * @return mixed: Assoc.array of strings
     */
    public function fetchAllSkills()
    {
        return DB::query("SELECT title FROM skills");
    }


    /**
     * Read Requested Page Title from URL (No title = Home Page)
     */
    public function readRequest()
    {
        return isset($_GET['page']) ? $_GET['page'] : "Home Page";
    }


    /**
     * Display the content for home page
     * @return mixed: Assoc.array
     */
    public function prepareHomePageContent()
    {
        $results = $this->fetchAllSkills();

        $pageContent['title'] = "";
        $pageContent['text'] = "<div class='row justify-content-center text-center'>";

        foreach ($results as $row) {
            $skillTitle = $row['title'];
            $pageContent['text'] .= "<div class='col-12 col-sm-6 col-md-4 col-lg-3 p-4'>
                            <a href='?page=$skillTitle'>
                            <img src='icons/$skillTitle.png' class='img-fluid skill-icon' alt='$skillTitle skill icon'>
                            <p class='text-capitalize'><strong>$skillTitle</strong></p>
                            </a>
                            </div>";
        }

        $pageContent['text'] .= "</div>";

        return $pageContent;
    }


    /**
     * Display the content for skill pages
     * @param {object} pageContent
     */
    public
    function displayPageContent($pageContent)
    {
        // Page Not Found
        if (!$pageContent) return '
        <div class="col-10">
            <h2 class="pb-3">Page Not Found</h2>
            <p>
                <a href="./index.php">Return To The Main Page</a>
            </p>
        </div>
        ';

        // Other Pages
        return '
		  <div class="col-10">
			<h2 class="pb-3">
			    ' . $pageContent['title'] . '
			</h2>
			    ' . $pageContent['text'] . '
		  </div>
		';
    }



///////////////////////////////////////////////////////////
/// TODO : Search
///////////////////////////////////////////////////////////



    /**
     * Display search results on the page, with an anchor link to navigate to the result page
     * @param {array of objects} results
     */
    public
    function displayResults($results)
    {
        $html = `
		<div id="search-results" class="col-10 text-justify">
		<p>${$results->length} Result(s) Found</p>
	  `;

        foreach ($results as $item) {
            $html += `
            <h4>
                <a href="?page=${$item->title}">${$item->title}</a>
            </h4>
            <p>${$item->description->slice(0, 150)}...</p>
            `;
        }

        $html += `</div>`;

        return $html;
    }

    /**
     * Use Regular Expressions to find all items with the search query in their title, description or text
     * @param {string} searchQuery
     */
    public
    function findResults($searchQuery)
    {
        $query = new RegExp($searchQuery, "i"); // i : case insensitive

        console . log($query);

        $results = [];

        foreach ($content as $skill) {
            if ($skill->item === $requestedTitle) {
                array_push($results, $skill);
            }
        }

        return $results;
    }


}