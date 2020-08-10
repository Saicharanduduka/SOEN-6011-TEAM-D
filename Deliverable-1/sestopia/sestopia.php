<?php

// include composers autoloader
require_once("vendor/autoload.php");

// MEEKRO - database variables
DB::$host = "";
DB::$user = "";
DB::$password = "";
DB::$dbName = "";
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

        $pageContent['title'] = "";
        $pageContent['text'] = "<div class='row justify-content-center text-center'>";
        $pageContent['isHomePage'] = true;

        foreach ($results as $row) {
            $skillTitle = $row['title'];
            $skillLink = str_replace(' ', '%20', $skillTitle); // to avoid HTML validation issues
            $pageContent['text'] .= "
                <div class='col-12 col-sm-6 col-md-4 col-lg-3 p-4'>
                     <a href='?page=$skillLink'>
                         <img src='icons/$skillLink.png' class='img-fluid skill-icon' alt='$skillTitle skill icon'>
                         <p class='text-capitalize'><strong>$skillTitle</strong></p>
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



///////////////////////////////////////////////////////////
/// TODO : Search
///////////////////////////////////////////////////////////


}