<?php
require "business_layer/Controller.php";

$controller = new Controller();
$pageContent = $controller->manageRequest();


////////////////////////////
//  Start of HTML Page   ///
////////////////////////////

// Header
include "inc/header.inc.php";

// Main Content
echo $pageContent['html'];

// Footer
include "inc/footer.inc.php";