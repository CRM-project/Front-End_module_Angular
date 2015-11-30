# crm_front-end

cd sources/webapp/vendors/
npm install
bower i

then run gulp (run gulp file or configurated IDE)

cd ../../
touch index.html

copy into index.html

--------------------------------------
<!DOCTYPE html>

<html lang="en" data-ng-app="crm">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>crm</title>
    <link rel="shortcut icon" href="webapps/images/favicon.gif" type="image/x-icon">
    <link rel="stylesheet" href="css/lib.min.css" />
    <link rel="stylesheet" href="css/app.min.css" />
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <!--<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>-->
    <![endif]-->
    <base href="/">

</head>

<body>

<div class="container-fluid">

    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="/">
                    <!--<img alt="Brand" src="vendor/img/favicon.gif">-->
                    CRM
                </a>
                <ul class="nav navbar-nav">

                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Main <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#projects">Projects</a></li>
                            <li class="enabled"><a href="#">Tasks</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="enabled"><a href="companies">Companies</a></li>
                            <li class="enabled"><a href="#">Contacts</a></li>
                            <li role="separator" class="divider"></li>
                            <li class="enabled"><a href="#">Analitics</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Administation <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li class="enabled"><a href="users">Users</a></li>
                            <li class="enabled"><a href="#">Employees</a></li>
                            <li class="enabled"><a href="#">Departments</a></li>
                        </ul>
                    </li>

                </ul>
            </div>
            <ul class="nav navbar-nav navbar-right">
                <li class="disabled"><a href="#">Вход</a></li>
                <li class="disabled"><a href="#">Регистрация</a></li>
            </ul>
        </div>
    </nav>

</div>
<div class="container">
    <div ng-view></div>
</div>

<script type="text/javascript" src="js/lib.min.js"></script>
<script type="text/javascript" src="js/app.min.js"></script>

</body>

</html>

------------------------------------------

http://localhost:/3000