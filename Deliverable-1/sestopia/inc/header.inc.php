<!DOCTYPE html>
<html lang="en">

<head>
    <title><?= (isset($pageSubTitle) && $pageSubTitle === "") ? "" : "$pageSubTitle - "; ?>Sestopia</title>
    <meta charset="utf-8">
    <meta name="description" content=""/> <!-- TODO -->
    <meta name="keywords" content=""/> <!-- TODO -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="icons/favicon.png"/>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" type="text/css" href="css/software_maintenance.css">
</head>

<body>

<nav class="navbar navbar-inverse navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="index.php" class="navbar-brand" title="Home Page"><strong>Sestopia</strong></a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="about-us.php" class="text-light" title="About Us"><strong>About Us</strong></a></li>
        </ul>
    </div>
</nav>

<header class="jumbotron text-center">
    <h1 class="text-capitalize pb-5">A Repository Of Skills</h1>
    <form class="search-form" action="search.php" method="post">
        <label for="search-query" class="visuallyhidden">Search:</label>
        <input type="text" placeholder="Search about a skill..." name="search" id="search-query">
        <button type="submit" id="search-button"><i title="search" class="fa fa-search">
                <strong> Search</strong></i>
        </button>
    </form>
</header>

<main class="container-fluid">
    <div class="row justify-content-center pt-5 pb-5" id="main">