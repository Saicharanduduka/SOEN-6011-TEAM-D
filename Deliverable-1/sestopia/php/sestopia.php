<?
//Constantes da conexão
define("DB_HOST","sql102.epizy.com");
define("DB_NAME","epiz_26274222_Sestopia_db");
define("DB_USER","epiz_26274222");
define("DB_PASS","C4xE5g2wuWzy");

//Criamos uma classe pra o sistema
class sestopia
{

    //Definimos o método private para o $db_connection
  private $db_connection = null;

  //Criaremos uma conexão com o banco de dados, usando PDO
  private function databaseConnection()
    {
    // Conexao berta
        if ($this->db_connection != null)
        {
            return true;
        }
        else
        {
            // Criando a conexao com banco de dados, usando constantes
            try
            {
                $this->db_connection = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';', DB_USER, DB_PASS);
                return true;
                // Tratamento de erro, caso falhe a conexao
            }
            catch (PDOException $e)
            {
                var_dump($e);
                $this->errors[] = $e;
                return false;
            }
        }
    }

    function __construct() {
	}

    public function getSkills()
    {
        //Chamamos a conexão com o banco
        $this->databaseConnection();

        //Selecionaremos a tabela com o nome do piloto passado pela função, faremos uso de Prepared statements para uma melhor segurança
        $content = $this->db_connection->prepare('SELECT * FROM skills');

        //Executar a ação para nos retornar a query
        $content->execute();

        //Vamos usar o fetchAll para nos retornar uma array com os dados do piloto
        $skillsFound = $content->fetchAll();
        $skillsFoundArrayOfObject = [];
        foreach($skillsFound as $skill){
            $skillsFoundArrayOfObject[] = (object) $skill;
        }
        return $skillsFoundArrayOfObject;
    }

	/**
	* Read Requested Page Title from URL (No title = Home Page)
	*/
	public function readRequest() {
        var_dump($_SERVER['QUERY_STRING']);
	  return (
          urldecode($_SERVER['QUERY_STRING']) || "Home Page");
    }
	
	/**
	 * Find the appropriate content for this page
	 * @param {string} requestedTitle
	 */
	public function findPageContent($requestedTitle) {
        $content = $this->getSkills();
        foreach($content as $skill) {
            if ($skill->title === $requestedTitle) {
                return $skill;
            }
        }
	}
	
	/**
	 * Display the content for this page
	 * @param {object} pageContent
	 */
	public function displayPageContent($pageContent) {
      $pageNotFound = `
        <div class="col-10">
        <h2 class="pb-3">Page Not Found</h2>
        <p>
        <a href="./index.html">Return Home</a>
        </p>
        </div>
        `;
	  // Page Not Found
	  if (!$pageContent) return $pageNotFound;
       

	  // Home Page
	  if ($pageContent->title === "Home Page") {
		return `
		  <div id="skill-title" class="col-10">
			${$pageContent->text}
		  </div>
		`;
	  }

	  // Other Pages
	  return `
		  <div class="col-10">
			<h2 class="pb-3">${$pageContent->title}</h2>
			${$pageContent->text}
		  </div>
		`;
	}
	
	/**
	* Display search results on the page, with an anchor link to navigate to the result page
	* @param {array of objects} results
	*/
	public function displayResults($results) {
	  $html = `
		<div id="search-results" class="col-10 text-justify">
		<p>${$results->length} Result(s) Found</p>
	  `;

        foreach($results as $item) {
           $html += `
            <h4>
                <a href="?page=${$item->title}">${$item->title}</a>
            </h4>
            <p>${$item->description->slice(0, 150)}...</p>
            `;
        }

	  $html += `</div>`;

	  return $html;
	}
	
	/**
	 * Use Regular Expressions to find all items with the search query in their title, description or text
	 * @param {string} searchQuery
	 */
	public function findResults($searchQuery) {
	  $query = new RegExp($searchQuery, "i"); // i : case insensitive

	  console.log($query);

	  $results = [];
      
      foreach($content as $skill) {
            if ($skill->item === $requestedTitle) {
                array_push($results, $skill);
            }
        }

	  return $results;
	}
}

?>