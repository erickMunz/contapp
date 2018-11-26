import 'whatwg-fetch'
import { ValidateToken, RemoveToken } from '../helpers'

/*const API_HOST = process.env.NODE_ENV === 'production' ? 'www.algo.com' : 'localhost'

const API_PORT = process.env.API_PORT || '10010'

const API_URL = `http://${API_HOST}:${API_PORT}/`
*/
const API_HOST = "e812a9c3.ngrok.io"
const API_PORT = '8000'
const API_URL = `https://${API_HOST}/api/`
//const API_URL = `http://${API_HOST}:${API_PORT}/api/`
// CONTIENE LAS FUNCIONES QUE MAPEAN LOS DIFERENTES METODOS DE LA API
function getValidToken(token) {
  return {
    'X-API-KEY': window.localStorage.getItem('API_TOKEN')
  }
}

function health() {
  return new Promise(function (resolve, reject) {
    fetch(API_URL + 'health')
      .then(res => {
        if (res.status === 200) {
          resolve(res.text())
        } else {
          reject('unexpected response from server')
        }
      }).catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function login(request) {
  return new Promise(function (resolve, reject) {
    const args = {
      'username': request.username,
      'password': request.password
    }

    fetch(API_URL + 'login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    })
      .then(res => {
        console.log('POST LOGIN', res.ok, res.status, res.statusText)
        if (res.status !== 200) {
          reject(res.status)
        }
        return res.text()
      })
      .then(body => {
        let res = JSON.parse(body)
        if (!res.success) {
          reject(res.message)
        }

        // We validate the token and store it on browser's localStorage
        let userInfo = ValidateToken(res.token)
        if (userInfo) {
          window.localStorage.setItem('API_TOKEN', res.token)
          resolve(userInfo)
        } else {
          reject('error')
        }
      }).catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function register(request) {
  return new Promise(function (resolve, reject) {
    const args = {
      'username': request.username,
      'email': request.email,
      'password': request.password
    }

    fetch(API_URL + 'user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    })
      .then(res => {
        console.log('POST REGISTER', res.ok, res.status, res.statusText)
        if (res.status !== 200) {
          reject(res.status)
        }
        return res.text()
      })
      .then(body => {
        let res = JSON.parse(body)
        if (!res.success) {
          reject(res.message)
        }

        // We validate the token and store it on browser's localStorage
        let userInfo = ValidateToken(res.token)
        if (userInfo) {
          window.localStorage.setItem('API_TOKEN', res.token)
          resolve(userInfo)
        } else {
          reject('error')
        }
      }).catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function userGet(username) {
  return new Promise(function(resolve, reject) {
    let headers = getValidToken()
    fetch(API_URL + 'user/' + username, {
      headers
    })
      .then(res => {
        console.log('GET USER', res.ok, res.status, res.statusText)
        if (res.status === 200) {
          return res.text()
        } else if (res.status === 403) {
          console.log('token expired or user revoked access')
          RemoveToken()
          reject(res.status)
        } else {
          reject(res.status)
        }
      }).then(body => {
        let user = JSON.parse(body)
        resolve(user)
      }).catch(err => {
        console.log(err)
        reject(err)
      })
  })
}

function userPatch(request) {
  return new Promise(function(resolve, reject) {
    const token = getValidToken()
    const args = {
      password: request.contraseña,
      email: request.correoElectronico,
      profile: {
        firstName: request.nombre,
        lastName: request.apellidos,
        birthday: request.fechaDeNacimiento
      }
    }

    fetch(API_URL + 'user/' + request.username, {
      method: 'PATCH',
      headers: Object.assign({
        'Content-Type': 'application/json'
      }, token),
      body: JSON.stringify(args)
    })
      .then(res => {
        console.log('PATCH USER FAV', res.ok, res.status, res.statusText)
        if (res.status !== 200) {
          reject(res.status)
        }
        resolve(true)
      })
  })
}


export default  {
  login,
  health,
  userGet,
  register,
  userPatch}