//file: /imports/api/menu/routes
const NavMenuEnum  = {
	HOME: 'home',
	POSTS: 'posts',
	LOGIN: 'login'
}

const NavMenuRoutes = {
	[NavMenuEnum.HOME]: '/',
	[NavMenuEnum.POSTS]: '/post/list',
	[NavMenuEnum.LOGIN]: '/login'
}

export {
	NavMenuEnum,
	NavMenuRoutes
}