<?php
// Prepare page title and description
$pageSubTitle = isset($pageContent) ? $pageContent['title'] : "";
$pageDescription = isset($pageContent) ? $pageContent['description'] : "";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title><?= ($pageSubTitle === "") ? "" : "$pageSubTitle - "; ?>Sestopia</title>
    <meta charset="utf-8">
    <!-- <base href="http://localhost/MyCode/sestopia/"> -->
    <base href="http://sestopia-d.epizy.com/">
    <meta name="description" content="<?= $pageDescription ?>"/>
    <meta name="keywords"
          content="Software, Quality, Maintenance, Design, Process Measurement, System Requirements, Testing, Engineering, Computing Foundations"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="icons/favicon.png"/>
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- Font Awesome -->
    <script
            src="https://kit.fontawesome.com/5a1816f9ba.js"
            crossorigin="anonymous"
    ></script>
    <!-- Custom CSS - General -->
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <?php if (!$pageContent['isHomePage']){ ?>
    <!-- Custom CSS - Skill Pages -->
    <link rel="stylesheet" type="text/css" href="css/skills.css">
    <?php } ?>
</head>

<body>

<nav class="navbar navbar-inverse navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="index.php" class="navbar-brand" title="Home Page"><strong>Sestopia</strong></a>
        </div>
        <ul class="nav navbar-nav navbar-right">
            <li class="text-light">by Team D</li>
        </ul>
    </div>
</nav>

<header class="jumbotron text-center">
    <h1 class="text-capitalize pb-5">A Repository Of Skills</h1>
    <form class="search-form" action="index.php" method="POST">
        <label for="search-query" class="visuallyhidden">Search:</label>
        <input type="text" placeholder="Search about a skill..." name="search-input" id="search-query">
        <button type="submit" id="search-button"><i title="search" class="fa fa-search">
                <strong> Search</strong></i>
        </button>
    </form>
</header>

<main class="container-fluid">
    <div class="row justify-content-center pt-5 pb-5" id="main">