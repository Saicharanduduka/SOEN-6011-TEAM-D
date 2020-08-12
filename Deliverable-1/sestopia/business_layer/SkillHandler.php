<?php
// include DB connection settings
require_once("inc/dbsettings.php");

class SkillHandler
{

    /**
     * Get page content info from DB based on Skill Title
     * * This info is used on the Skill Pages
     * @param $skillTitle
     * @return mixed: Assoc.array containing 1 DB row
     */
    public function fetchSkillDataByTitle($skillTitle)
    {
        return DB::queryOneRow("SELECT * FROM skills WHERE title = %s",
            str_replace('%20', ' ', $skillTitle));
    }


    /**
     * Get all skill titles from DB
     * This info is used on the Home Page
     * @return mixed: Assoc.array of strings
     */
    public function fetchAllSkillTitles()
    {
        return DB::query("SELECT title FROM skills");
    }


    /**
     * Search the DB and return all rows that contain the search keyword in their title, description or text
     * It trims the search keyword, and adds wildcards before and after it
     * This info is used on the Search Results Page
     * @param $searchCriteria
     * @return mixed Assoc.array
     */
    public function searchDB($searchCriteria)
    {
        return DB::query("SELECT title, description 
                            FROM skills 
                            WHERE title LIKE %s0 
                               OR description LIKE %s0 
                               OR text LIKE %s0",
            "%" . trim($searchCriteria) . "%");
    }

}