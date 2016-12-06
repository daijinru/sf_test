<!DOCTYPE HTML>
<html>
  <head>
    <title>Todo</title>
    <link rel="stylesheet" href="/stylesheets/style.css">
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
