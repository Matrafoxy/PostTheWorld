// file: /imports/routing/index.js

import route from './router.js';
import Register from '/imports/ui/pages/user/Register.jsx';
import Login from 	'/imports/ui/pages/user/Login';

route('/register', Register);
route('/login', Login);
route('/posts/list');