<?php

// include composers autoloader
require_once("vendor/autoload.php");

// MEEKRO - database variables
DB::$host = "sql102.epizy.com";
DB::$user = "epiz_26274222";
DB::$password = "C4xE5g2wuWzy";
DB::$dbName = "epiz_26274222_Sestopia_db";
DB::$encoding = "utf8";


class sestopia
{

    function __construct()
    {
    }


    /**
     * Read Requested Page Title from URL (No title = Home Page)
     */
    public function readRequest()
    {
        return isset($_GET['page']) ? $_GET['page'] : "Home Page";
    }


    /**
     * Get page content info from DB based on Page Title
     * @param $pageTitle
     * @return mixed: Assoc.array containing 1 DB row
     */
    public function fetchPageContentByTitle($pageTitle)
    {
        $pageTitle = str_replace('%20', ' ', $pageTitle);
        $pageContent = DB::queryOneRow("SELECT * FROM skills WHERE title = %s", $pageTitle);
        $pageContent['isHomePage'] = false;
        return $pageContent;
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
     * Display the content for home page
     * @return mixed: Assoc.array
     */
    public function prepareHomePageContent()
    {
        $results = $this->fetchAllSkills();

        $pageContent['isHomePage'] = true;
        $pageContent['title'] = "";
        $pageContent['description'] = "Skills desirable of a software engineer to develop proficiency and
excel in a particular area in software engineering for the 21st century as given by SWEBOK and/or SWECOM";

        $pageContent['text'] = "<div class='row justify-content-center text-center'>";

        foreach ($results as $row) {
            $skillTitle = $row['title'];
            $skillLink = str_replace(' ', '%20', $skillTitle); // to avoid HTML validation issues
            $pageContent['text'] .= "
                <div class='col-12 col-sm-6 col-md-4 col-lg-3 p-4'>
                     <a href='?page=$skillLink'>
                         <img src='icons/$skillLink.png' class='img-fluid skill-icon' alt='$skillTitle skill icon'>
                         <p class='text-capitalize text-center'><strong>$skillTitle</strong></p>
                     </a>
                 </div>
            ";
        }

        $pageContent['text'] .= "</div>";

        return $pageContent;
    }


    /**
     * Find out whether the "HomePage" is requested or a "SkillPage", then return the appropriate HTML code
     * @param $requestedTitle
     * @return mixed: Assoc.array
     */
    public function getPageContent($requestedTitle)
    {
        if ($requestedTitle === "Home Page") {
            return $this->prepareHomePageContent();
        } else {
            return $this->fetchPageContentByTitle($requestedTitle);
        }
    }


    /****************************
     ********* SEARCH ***********
     ****************************/


    /**
     * Search in the database and return all rows that contain the search keyword
     * @param $searchCriteria
     * @return mixed Assoc.array
     */
    public function searchDB($searchCriteria)
    {
        $searchCriteria = "%" . trim($searchCriteria) . "%"; // adding wildcard before and after the criteria
        return DB::query("SELECT title, description FROM skills WHERE title LIKE %s0 OR description LIKE %s0 OR text LIKE %s0", $searchCriteria);
    }


    /**
     * Prepare the content for search page
     * @return mixed: Assoc.array
     */
    public function prepareSearchPageContent($searchCriteria)
    {
        $searchResults = $this->searchDB($searchCriteria);
        $searchResultsCount = count($searchResults);

        $pageContent['isHomePage'] = false;
        $pageContent['title'] = "Search Results";
        $pageContent['description'] = "All Search Results Related to the Provided Term(s)";

        $pageContent['text'] = "<div id='search-results' class='col-10 text-justify'>
            <p>$searchResultsCount Result(s) Found</p>";

        foreach ($searchResults as $result) {
            $skillTitle = $result['title'];
            $skillLink = str_replace(' ', '%20', $skillTitle); // to avoid HTML validation issues
            $skillDescription = substr($result['description'], 0, 150);
            $pageContent['text'] .= "
                <h4>
                    <a href='index.php?page=$skillLink' class='text-primary'>$skillTitle</a>
                </h4>
                <p>$skillDescription...</p >
            ";
        }

        $pageContent['text'] .= "</div>";

        return $pageContent;
    }


}