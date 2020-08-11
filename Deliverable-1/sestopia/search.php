<?php
// Including our class
require("sestopia.php");

if ($_SERVER['REQUEST_METHOD'] != "POST") {
    header("Location: index.php");
    die();
}

// Creating the instance
$sestopia = new sestopia();

// Searching the DB and fetching all search results
$pageContent = $sestopia->prepareSearchPageContent($_POST['search']);


////////////////////////////
// Start of Page Content ///
////////////////////////////


// Header
include "inc/header.inc.php";

// Main Content
?>

    <div class="col-10">
        <h2 class="pb-3">
            <?= $pageContent['title'] ?>
        </h2>
        <?= $pageContent['text'] ?>
    </div>

<?php

// Footer
include "inc/footer.inc.php";