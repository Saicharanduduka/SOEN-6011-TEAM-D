<?php

require_once "SearchHandler.php";
require_once "PageBuilder.php";
require_once "ErrorHandler.php";

class Controller
{

    private $searchHandler;
    private $pageBuilder;
    private $errorHandler;

    function __construct()
    {
        $this->searchHandler = new SearchHandler();
        $this->pageBuilder = new PageBuilder();
        $this->errorHandler = new ErrorHandler();
    }

    /**
     * Check the request and call the appropriate functions.
     * @return mixed Assoc.array
     */
    public function manageRequest()
    {

        // Request for: SearchPage
        if ($_SERVER['REQUEST_METHOD'] === "POST" && isset($_POST['search-input'])) {
            return $this->searchHandler->prepareSearchPageContent($_POST['search-input']);
        }

        // Request for: HomePage, SkillPage or ErrorPage

        // Find the Requested Page Title From URL query
        $requestedTitle = $this->readRequest();

        // Check if an Error Page was Requested
        switch ($requestedTitle) {
            case 403:
                return $this->errorHandler->prepareErrorPageContent(403);
            case 404:
                return $this->errorHandler->prepareErrorPageContent(404);
            case 500:
                return $this->errorHandler->prepareErrorPageContent(500);
            default:
                // do nothing
        }

        // Request for: HomePage or SkillPage

        // Fetch and Prepare the Page Content
        $pageContent = $this->pageBuilder->preparePageContent($requestedTitle);

        // Check for Errors in the $pageContent and return it
        return ($pageContent['html'] === "")
            ? $this->errorHandler->prepareErrorPageContent(404)
            : $pageContent;

    }


    /**
     * Read Requested Page Title from URL (No title = Home Page)
     */
    public
    function readRequest()
    {
        return isset($_GET['page']) ? $_GET['page'] : "Home Page";
    }

}