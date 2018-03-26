//file: /imports/api/menu/routes
const NavMenuEnum  = {
	HOME: 'home',
	POSTS: 'posts',
	NEWPOST: 'new post',
	LOGIN: 'login',
	LOGOUT: 'logout'
}

const NavMenuRoutes = {
	[NavMenuEnum.HOME]: '/',
	[NavMenuEnum.POSTS]: '/post/list',
	[NavMenuEnum.NEWPOST]: '/post',
	[NavMenuEnum.LOGIN]: '/login',
	[NavMenuEnum.LOGOUT]: '/logout'

}

export {
	NavMenuEnum,
	NavMenuRoutes
}

