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
        }
      ]
    }
  ],
  plugins: [
    ['umi-plugin-react', {
      // TODO
      antd: true
    }]
  ]
};
