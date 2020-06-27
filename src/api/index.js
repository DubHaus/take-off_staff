const __apiBase = 'http://localhost:3001'

export const setUser = (user) => {
  return makeRequest('user', 'POST', user)
}

export const deleteUser = () => {
  return makeRequest('user', 'DELETE')
}

export const getContacts = () => {
  return makeRequest('contacts')
}

export const addContactsItem = (item) => {
  return makeRequest('contacts', 'PUT', item)
}

export const deleteContactsItem = (itemId) => {
  return makeRequest('contacts', 'DELETE', { id: itemId })
}

const makeRequest = (url, method = "GET", body = {}) => {
  const request = method !== "GET" ? {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  }
    :
    {
      method,
      headers: {
        "Content-Type": "application/json"
      },
    }
  return fetch(`${__apiBase}/${url}`, request)
    .then(res => res.json())
    .then(data => {
      if (data.statusCode === 1) throw new Error(data.error)
      else return data.data
    })
}