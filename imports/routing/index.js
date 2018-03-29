// file: /imports/routing/index.js

import route from './router.js';
import Register from '/imports/ui/pages/user/Register.jsx';
import Login from 	'/imports/ui/pages/user/Login';
import PostCreate from '/imports/ui/pages/post/PostCreate';
import PostList from '/imports/ui/pages/post/PostList';
import PostEdit from '/imports/ui/pages/post/PostEdit';
import Logout from  '/imports/ui/pages/user/Logout';

route('/', PostList, {}, {
	name: 'home'
});
route('/register', Register, {}, {
	name: 'register'
});
route('/login', Login, {}, {
	name: 'login'
});
route('/post', PostCreate, {}, {
	name: 'post_create'
});
route('/post/list', PostList, {}, {
	name: 'post_list'
});
route('/post/edit/:_id', PostEdit, {}, {
	name: 'post_edit'
});
route('/logout', Logout, {}, {
	name: 'logout'
});