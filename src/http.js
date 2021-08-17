

function parseDbUrl(dbUrl) {
  return {
    username: dbUrl.split('@')[0].replace('http://','').split(':')[0],
    password: dbUrl.split('@')[0].replace('http://','').split(':')[1],
    url: `${dbUrl.includes('https://') ? 'https://': 'http://'}${dbUrl.split('@')[1]}` 
  }
}

export async function get(dbUrl) {
  const dbUrlInfo = parseDbUrl(dbUrl)
  const headers = {
    'Authorization': 'Basic ' + window.btoa(`${dbUrlInfo.username}:${dbUrlInfo.password}`),
    'Content-Type': 'application/json'
  }
  const response = await fetch(dbUrlInfo.url, {
    headers 
  })
  if (!response.ok) {
    throw new Error(response)
  } else {
    return await response.json()
  }
}


export async function put(dbUrl, data) {
  const dbUrlInfo = parseDbUrl(dbUrl)
  const headers = {
    'Authorization': 'Basic ' + window.btoa(`${dbUrlInfo.username}:${dbUrlInfo.password}`),
    'Content-Type': 'application/json'
  }
  const response = await fetch(dbUrlInfo.url, {
    method: 'PUT',
    headers,
    ...data
      ? { body: JSON.stringify(data) }
      : { }
  })
  return await response.json()
}
