//file: /imports/api/menu/routes
const NavMenuEnum  = {
	HOME: 'home',
	POSTS: 'posts',
	LOGIN: 'login',
	LOGOUT: 'logout'
}

const NavMenuRoutes = {
	[NavMenuEnum.HOME]: '/',
	[NavMenuEnum.POSTS]: '/post/list',
	[NavMenuEnum.LOGIN]: '/login',
	[NavMenuEnum.LOGOUT]: '/logout'

}

export {
	NavMenuEnum,
	NavMenuRoutes
}

