
// Function that return a token 
// Needs mail et password in the body 

export async function fetchToken (body) {  
  const response = await fetch(`http://localhost:3001/api/v1/user/login`, {
    method: 'POST',
    headers: { 
        "Content-Type": 'application/json',
    },
    body: JSON.stringify(body),
  })
  return await response.json()     
}


//Function that fetch the user profile, needs a token

export async function fetchProfile (token) {
      const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: 'POST',
        headers: { 
            "Content-Type": 'application/json',
            Authorization: 'Bearer ' + token,
        },
      })
      return await response.json()     
    } 