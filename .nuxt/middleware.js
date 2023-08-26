const middleware = {}

middleware['autenticacao'] = require('../middleware/autenticacao.js')
middleware['autenticacao'] = middleware['autenticacao'].default || middleware['autenticacao']

export default middleware
