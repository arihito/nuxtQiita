import Cookies from 'universal-cookie'

export default ({ req, route, redirect }) => {
  // console.log(route.path)

  const cookies = req ? new Cookies(req.headers.cookie) : new Cookies()
  const credential = cookies.get('credential')

  if (['/'].includes(route.path) && !credential) {
    return redirect('/login')
  } else if (['/'].includes(route.path)) {
    return
  }

  if (credential && route.path === '/login') {
    return redirect('/')
  }

  if (!credential && route.path !== '/login') {
    return redirect('/login')
  }
}