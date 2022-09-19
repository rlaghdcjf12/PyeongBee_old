export const serviceList = [
  {
    id: 1,
    title: 'ME',
    baseUrl: '/me',
    url: '/me',
    footerMenu: [
      { title: '자아' },
      // { title: "꿈" },
      { title: '추억' },
      // { title: "분석" },
    ],
  },
  {
    id: 2,
    title: 'YOU',
    baseUrl: '/you',
    url: '/you',
    footerMenu: [{ title: '마니또' }, { title: 'M2' }, { title: 'M3' }, { title: '친구' }],
  },
  {
    id: 3,
    title: 'US',
    baseUrl: '/us',
    url: '/us/hive',
    footerMenu: [
      { title: '둥지' },
      { title: '내 둥지' },
      // { title: "비네스북" },
      { title: '버즈' },
    ],
  },
];

export const getService = (id) => {
  return serviceList.find((service) => service.id === id);
};
