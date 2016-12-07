<!DOCTYPE HTML>
<html>
  <head>
    <title>Todo</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <h1>{{title}}</h1>
    <form action="/todos" method="POST">
      <input type="text" name="content" />
      <input type="submit" value="新增" />
    </form>
    <ul>

      {% for todo in todos %}
      <li>{{todo._serverData.content}}</li>
      {% endfor %}
      
    </ul>
  </body>
</html>
