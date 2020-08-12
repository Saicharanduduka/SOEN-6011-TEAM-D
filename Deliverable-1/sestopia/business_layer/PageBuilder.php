<?php
require_once "SkillHandler.php";

class PageBuilder
{

    private $skillHandler;
    private $homePageDescription = "Skills desirable of a software engineer to develop proficiency and
                                    excel in a particular area in software engineering for the 21st 
                                    century as given by SWEBOK and/or SWECOM";

    function __construct()
    {
        $this->skillHandler = new SkillHandler();
    }


    /**
     * Find out whether the "HomePage" is requested or a "SkillPage",
     * then return the appropriate HTML code
     * @param $requestedTitle
     * @return mixed: Assoc.array
     */
    public function preparePageContent($requestedTitle)
    {
        if ($requestedTitle === "Home Page") {
            return $this->prepareHomePageContent();
        } else {
            return $this->prepareSkillPageContent($requestedTitle);
        }
    }

    /**
     * Display the content for home page
     * @return mixed: Assoc.array
     */
    public function prepareHomePageContent()
    {
        $results = $this->skillHandler->fetchAllSkillTitles();

        $pageContent['html'] = "<div class='col-10'>
                                    <div class='row justify-content-center text-center'>";

        foreach ($results as $row) {
            $skillTitle = $row['title'];
            $skillLink = str_replace(' ', '%20', $skillTitle); // to avoid HTML validation issues
            $pageContent['html'] .= "
                <div class='col-12 col-sm-6 col-md-4 col-lg-3 p-4'>
                     <a href='?page=$skillLink'>
                         <img src='icons/$skillLink.png' class='img-fluid skill-icon' alt='$skillTitle skill icon'>
                         <p class='text-capitalize text-center'><strong>$skillTitle</strong></p>
                     </a>
                 </div>
            ";
        }

        $pageContent['html'] .= "  </div>
                                </div>";

        $pageContent['isHomePage'] = true;
        $pageContent['title'] = "";
        $pageContent['description'] = $this->homePageDescription;

        return $pageContent;
    }


    /**
     * Display the content for skill pages
     * @param $requestedTitle
     * @return mixed: Assoc.array
     */
    public function prepareSkillPageContent($requestedTitle)
    {
        $pageContent = $this->skillHandler->fetchSkillDataByTitle($requestedTitle);

        if (!$pageContent){ // Skill was not found in DB
            $pageContent['html'] = "";
        } else {
            $pageContent['html'] = "
          <div class='col-10'>
            <h2 class='pb-3'>
            " . $pageContent['title'] . "
            </h2>
            " . $pageContent['text'] . "
          </div>
        ";
        }

        $pageContent['isHomePage'] = false;

        return $pageContent;
    }

}