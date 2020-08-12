<?php
require_once "SkillHandler.php";

class SearchHandler
{

    private $skillHandler;

    private $searchPageTitle = "Search Results";
    private $searchPageDescription = "All Search Results Related to the Provided Term(s)";


    function __construct()
    {
        $this->skillHandler = new SkillHandler();
    }


    /**
     * Prepare the content for search page
     * @return mixed: Assoc.array
     */
    public function prepareSearchPageContent($searchCriteria)
    {
        $searchResults = $this->skillHandler->searchDB($searchCriteria);

        $searchResultsCount = count($searchResults);

        $pageContent['html'] = "<div class='col-10'>
                                    <div id='search-results' class='col-10 text-justify'>
                                        <p>$searchResultsCount Result(s) Found</p>";

        foreach ($searchResults as $result) {
            $skillTitle = $result['title'];
            $skillLink = str_replace(' ', '%20', $skillTitle); // to avoid HTML validation issues
            $skillDescription = substr($result['description'], 0, 150);
            $pageContent['html'] .= "
                <h4>
                    <a href='index.php?page=$skillLink' class='text-primary'>$skillTitle</a>
                </h4>
                <p>$skillDescription...</p >
            ";
        }

        $pageContent['html'] .= "  </div>
                                </div>";

        $pageContent['isHomePage'] = false;
        $pageContent['title'] = $this->searchPageTitle;
        $pageContent['description'] = $this->searchPageDescription;

        return $pageContent;
    }

}