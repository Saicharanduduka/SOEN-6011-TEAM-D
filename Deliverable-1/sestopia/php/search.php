<?php
//Including our class
require("sestopia.php");
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Sestopia</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="" /> <!-- TODO -->
  <meta name="keywords" content="" /> <!-- TODO -->
  <link rel="icon" type="image/png" href="icons/favicon.png" />
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
        <a href="index.html" class="navbar-brand" title="Home Page"><strong>Sestopia</strong></a>
      </div>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="index.html?page=About Us" class="text-light" title="About Us"><strong>About Us</strong></a></li>
      </ul>
    </div>
  </nav>

  <header class="jumbotron text-center">
    <h1 class="text-capitalize pb-5">A Repository Of Skills</h1>
    <form class="search-form" action="search.php" method="post">
      <label for="search-query" class="visuallyhidden">Search:</label>
      <input type="text" placeholder="Search about a skill..." name="search" id="search-query" >
      <button type="submit" id="search-button" ><i title="search" class="fa fa-search" style="color: #ffffffe7; height: 20%;"><strong> Search</strong></i></button>
    </form>
  </header>
  
  <main class="container-fluid">
    <div class="row justify-content-center pt-5 pb-5" id="main">
      <?
		var sestopia = new sestopia();
		echo sestopia.displayResults(sestopia.findResults($_POST["search"]));
	  ?>
    </div>
  </main>

  <footer>
    <div class="container-fluid">
      <div class="row bg-dark pt-3 mt-2 justify-content-center" id="footer">
        <div class="col-10 text-center">
          <p style="color: #CFCFCF; background-color:#343A40;"><strong>Copyright &#169; 2020, All rights reserved.</strong></p>
        </div>
      </div>
    </div>
  </footer>

  <!-- JavaScript -->
  <!-- jQuery JS -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
  <!-- Popper JS -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
  <!-- Bootstrap JS -->
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p-3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
  <!-- Custom JS -->
  <script src="js/data.js"></script>
  <script src="js/main.js"></script>
</body>

</html>
