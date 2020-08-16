export default {
  path: '/movie',
  component: () => import('@/views/Movie'),
  children: [
    {
      path: '/movie/comingsoon',
      component: () => import('@/views/Movie/comingsoon')
    },
    {
      path: '/movie/nowplaying',
      component: () => import('@/views/Movie/nowplaying')
    },
    {
      path: '/movie/city',
      component: () => import('@/views/Movie/city')
    },
    {
      path: '/movie/search',
      component: () => import('@/views/Movie/search')
    },
    {
      path: '/movie',
      redirect: '/movie/nowplaying'
    },
  ]
}