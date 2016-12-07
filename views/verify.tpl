<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>{{title}}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<style type="text/css">
		html{
			font-size: calc(100vw/3.75);
		}
		body{
			background: #00aeef;
		}
		#loading{
			position: relative;
			width: 100vw;
			height: 100vh;
		}
		#loading img{
			position: absolute;
			top:50%;
			left:50%;
			margin-top:-1.5rem;
			margin-left:-1.5rem;
			width: 2.8rem;
			height: 2.1rem;
		}
	</style>
</head>
<body>
	<div id="loading"><img src="images/login.gif" alt=""></div>
	
	<script type="text/javascript" src="js/jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.cookie.js"></script>
	<script type="text/javascript" src="js/verify.js"></script>
</body>
</html>