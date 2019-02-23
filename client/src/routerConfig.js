// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称
import UserLogin from './pages/UserLogin';
import UserRegister from './pages/UserRegister';
import Dashboard from './pages/Dashboard';
import PostList from './pages/PostList';
import CreatePost from './pages/CreatePost';
import CateList from './pages/CateList';
import CreateCate from './pages/CreateCate';
import TagList from './pages/TagList';
import CreateTag from './pages/CreateTag';
import UserList from './pages/UserList';
import CreateUser from './pages/CreateUser';
import EditPassword from './pages/EditPassword';
import BasicSetting from './pages/BasicSetting';

import BasicLayout from './layouts/BasicLayout';
import Page17 from './pages/Page17';
import NavigationSetting from './pages/NavigationSetting';

const routerConfig = [
  {
    path: '/tag/list',
    component: TagList,
  },
  {
    path: '/user/register',
    component: UserRegister,
  },
  {
    path: '/dashboard/monitor',
    component: Dashboard,
  },
  {
    path: '/setting/basic',
    component: BasicSetting,
  },
  {
    path: '/setting/navigation',
    component: NavigationSetting,
  },
  {
    path: '/users/list',
    component: UserList,
  },
  {
    path: '/users/create',
    component: CreateUser,
  },
  {
    path: '/user/login',
    component: UserLogin,
  },
  {
    path: '/users/pwd',
    component: EditPassword,
  },
  {
    path: '/tag/create',
    component: CreateTag,
  },
  {
    path: '/cate/list',
    component: CateList,
  },
  {
    path: '/cate/create',
    component: CreateCate,
  },
  {
    path: '/post/list',
    component: PostList,
  },
  {
    path: '/post/create',
    component: CreatePost,
  },
  {
    path: '/page17',
    layout: BasicLayout,
    component: Page17,
  },
];

export default routerConfig;
