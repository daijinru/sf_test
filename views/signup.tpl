<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{title}}</title>
    <meta name="description" content="signup">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    
    <!-- Custom styles for this template -->
    <link href="css/header.css" rel="stylesheet">
    <link href="css/signup.css" rel="stylesheet">

  </head>
  <body>
    <div class="container">
      <div class="header clearfix">
        <nav>
          <ul class="nav nav-tabs pull-right">
            <li role="presentation"><a href="/">登录</a></li>
            <li role="presentation" class="active"><a href="/signup">注册</a></li>
          </ul>
        </nav>
      </div>

      <form class="form-signup">
        <h2 class="form-signup-heading">注册新用户</h2>
        <label for="inputUsername" class="sr-only">username</label>
        <input type="username" id="inputUsername" class="form-control" placeholder="username" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required>
        <a href="javascript:;" id="submit" class="btn btn-lg btn-primary btn-block">submit</a>
      </form>
    </div> <!-- /container -->

    <script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
    <script type="text/javascript" src="js/signup.js"></script>
  </body>
</html>
