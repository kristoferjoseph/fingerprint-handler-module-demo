// learn more about HTTP functions here: https://arc.codes/http
exports.handler = async function http () {
  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/html; charset=utf8'
    },
    body: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Architect</title>
</head>
<h1>YOLO</h1>
<script type=module src=/modules/a.js></script>
</html>
`
  }
}
