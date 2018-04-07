<?php 
use Phalcon\Db;
use Phalcon\Db\Exception;
use Phalcon\Db\Adapter\Pdo\Mysql as MysqlConnection;
use Phalcon\Mvc\Micro;
use Phalcon\Http\Response;
use Phalcon\Loader;


$connection = new MysqlConnection(
    [
        "host"     => "localhost",
        "username" => "homework",
        "password" => "homework",
        "dbname"   => "homework",
        "port"     => "3306",
    ]
);
$app = new Micro();
// Retrieves all 
$app->get(
    "/",
    function () {
        $response = new Response();
        $response->setJsonContent(["status" => "0"]);
        return $response;
    }
);

$app->get(
    "/api/{id:[0-9]+}",
    function ($id) use ($app,$connection) {
        $rsOne = $connection->fetchOne("SELECT * FROM linked where id = $id");
        $response = new Response();
        if ($rsOne === false) {
            $response->setJsonContent(["status" => 0]);
        } else {
            $response->setJsonContent(["status" => 1,"total" => $rsOne['total']]);
        }
        return $response;
    }
);

$app->post(
    "/api",
    function () use ($app,$connection) {
        $req = $app->request->getJsonRawBody();
        $rsOne = $connection->execute("update linked set total=total+1 where id=".$req->id);
        $response = new Response();
        if ($rsOne === false) {
            $response->setJsonContent(["status" => 0]);
        } else {
            $response->setJsonContent(["status" => 1]);
        }
        return $response;
    }
);

$app->put(
    "/api/{id:[0-9]+}",
    function () {

    }
);

$app->handle();
?>