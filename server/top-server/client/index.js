const contact = {
  number: 6,
  string: "33",
}

async function getResponse() {
  let response = await fetch('/ok', contact)
  .then(response => response.json())
  .then(json => console.log(json))
}

async function postResponse() {
  await fetch('/ok',   {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
}

getResponse()
postResponse()

