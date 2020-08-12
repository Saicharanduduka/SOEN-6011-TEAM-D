<?php


class ErrorHandler
{
    private $accessDeniedMessage = "
        <div class='col-10'>
            <h2 class='pb-3'>
                Access Denied
            </h2>
            <p>
                You are not authorized to view this content.
            </p>
            <p>
                <a href='http://sestopia-d.epizy.com/' title='Home Page' class='text-primary'>Return To The Main Page</a>
            </p>
        </div>
    ";

    private $pageNotFoundMessage = "
        <div class='col-10'>
            <h2 class='pb-3'>
                Page Not Found
            </h2>
            <p>
                The page you requested cannot be found.
            </p>
            <p>
                <a href='http://sestopia-d.epizy.com/' title='Home Page' class='text-primary'>Return To The Main Page</a>
            </p>
        </div>
    ";

    private $serverErrorMessage = "
        <div class='col-10'>
            <h2 class='pb-3'>
                Internal Server Error
            </h2>
            <p>
                The server has encountered a problem, please try again later.
            </p>
            <p>
                <a href='http://sestopia-d.epizy.com/' title='Home Page' class='text-primary'>Return To The Main Page</a>
            </p>
        </div>    
    ";


    /**
     * Display the content for error page
     * @param $errorCode
     * @return mixed: Assoc.array
     */
    public function prepareErrorPageContent($errorCode)
    {
        switch ($errorCode) {
            case "403":
                $pageContent['html'] = $this->accessDeniedMessage;
                $pageContent['title'] = "Access Denied";
                break;
            case "404":
                $pageContent['html'] = $this->pageNotFoundMessage;
                $pageContent['title'] = "Page Not Found";
                break;
            default:
                $pageContent['html'] = $this->serverErrorMessage;
                $pageContent['title'] = "Server Error";
        }

        $pageContent['isHomePage'] = false;
        $pageContent['description'] = "Error Page";
        return $pageContent;
    }

}