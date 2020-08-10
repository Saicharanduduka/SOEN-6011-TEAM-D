<?php
// Including our class
require "sestopia.php";

$sestopia = new sestopia();

// Find the Requested Page Title From URL
$requestedTitle = $sestopia->readRequest();

// Fetch and Prepare the Page Content
$pageContent = $sestopia->getPageContent($requestedTitle);

// Check for PageNotFound
if (!$pageContent){
    header("Location: page-not-found.php");
    die();
}

// Prepare page title (used in header.inc.php)
$pageSubTitle = $pageContent['title'];
$pageDescription = $pageContent['description'];

////////////////////////////
// Start of Page Content ///
////////////////////////////

// Header
include "inc/header.inc.php";

// Main Content

if ($pageContent['isHomePage']){ ?>

    <div class="col-10">
        <?= $pageContent['text'] ?>
    </div>

<?php
} else { ?>

    <div class="col-10">
        <h2 class="pb-3">
            <?= $pageContent['title'] ?>
        </h2>
        <?= $pageContent['text'] ?>
    </div>

<?php
}

// Footer
include "inc/footer.inc.php";