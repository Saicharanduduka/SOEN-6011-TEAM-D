<?php
// Including our class
require "sestopia.php";

$sestopia = new sestopia();

// Find the Requested Page Title
$requestedTitle = $sestopia->readRequest();

// Fetch and Prepare the Page Content
if ($requestedTitle === "Home Page") {
    $pageContent = $sestopia->prepareHomePageContent();
} else {
    $pageContent = $sestopia->fetchPageContentByTitle($requestedTitle);
}

// Prepare page title (used in header.inc.php)
$pageSubTitle = (!$pageContent) ? "Page Not Found" : $pageContent['title'];


////////////////////////////
// Start of Page Content ///
////////////////////////////

// Header
include "inc/header.inc.php";

// Main Content
echo $sestopia->displayPageContent($pageContent);

// Footer
include "inc/footer.inc.php";