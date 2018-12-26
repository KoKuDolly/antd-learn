export default {
  singular: true,
  routes: [
    {
      path: '/',
      component: './layout',
      routes: [
        {
          path: '/',
          component: './helloworld'
        },
        {
          path: 'helloworld',
          component: './helloworld'
        },
        {
          path: '/dashboard',
          routes: [
            { path: 'analysis', component: './Dashboard/Analysis' },
            { path: 'monitor', component: './Dashboard/Monitor' },
            { path: 'workplace', component: './Dashboard/Workplace' }
          ]
        },
        {
          path: 'puzzlecards',
          component: './puzzlecards'
        },
        { path: 'list', component: '../page/list/index' },
        { path: 'locale', component: '../page/locale'}
      ]
    }
  ],
  plugins: [
    ['umi-plugin-react', {
      // TODO
      antd: true,
      dva: true,
      locale: {
        enable: true,
      }
    }]
  ],
  proxy: {
    '/dev': {
      target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
      changeOrigin: true,
    }
  }
};
