<?php

// Prepare page title (used in header.inc.php)
$pageSubTitle = "Internal Server Error";


////////////////////////////
// Start of Page Content ///
////////////////////////////


// Header
include "inc/header.inc.php";

// Main Content
?>

    <div class="col-10">
        <h2 class="pb-3">
            Internal Server Error
        </h2>
        <p>
            The server has encountered a problem, please try again later.
        </p>
        <p>
            <a href="http://sestopia-d.epizy.com/" title="Home Page" class="text-primary">Return To The Main Page</a>
        </p>
    </div>

<?php

// Footer
include "inc/footer.inc.php";