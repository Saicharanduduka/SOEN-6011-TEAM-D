<?php

// Prepare page title (used in header.inc.php)
$pageSubTitle = "Access Denied";


////////////////////////////
// Start of Page Content ///
////////////////////////////


// Header
include "inc/header.inc.php";

// Main Content
?>

    <div class="col-10">
        <h2 class="pb-3">
            Access Denied
        </h2>
        <p>
            You are not authorized to view this content.
        </p>
        <p>
            <a href="http://sestopia-d.epizy.com/" title="Home Page" class="text-primary">Return To The Main Page</a>
        </p>
    </div>

<?php

// Footer
include "inc/footer.inc.php";