import { IconInfo } from './iconInfo';

type ProjectInfomation = {
  name: string;
  thumbnail: string;
  usingStack: string[];
  personnel: string;
  subTitle: string;
  hoverIcon: IconInfo[];
};

export const PROJECT_INFO: ProjectInfomation[] = [
  {
    name: 'Booktique',
    thumbnail: '/assets/thumbnail/booktique.png',
    usingStack: [
      'React',
      'Typescript',
      'NextJS',
      'React Query',
      'Tailwind CSS',
      'Supabase'
    ],
    personnel: '프론트엔드5, 디자이너1',
    subTitle:
      '오프라인이 아닌 온라인에서 읽고싶은 책을 읽고 정보공유를 할수 있는 사이트',
    hoverIcon: [
      {
        icon: 'home',
        tooltip: '배포 사이트',
        href: 'https://www.booktique.xyz/'
      },
      {
        icon: 'github',
        tooltip: '깃허브',
        href: 'https://github.com/princessbook/booktique'
      },
      {
        icon: 'notion',
        tooltip: '노션',
        href: 'https://www.notion.so/399f3df2ecb1413a9258eb11074ad080?p=4634a8680052484e8767942c92ad1dc2&pm=c'
      }
    ]
  },
  {
    name: 'Fill ur Pill',
    thumbnail: '/assets/thumbnail/fillurpill.png',
    usingStack: [
      'React',
      'Typescript',
      'NextJS',
      'React Query',
      'Tailwind CSS',
      'Supabase'
    ],
    personnel: '프론트엔드4',
    subTitle:
      '건강기능식품 검색, 조회, 섭취 이력 관리, 구매까지 연계된 웹사이트',
    hoverIcon: [
      {
        icon: 'home',
        tooltip: '배포 사이트',
        href: 'https://fillurpill.vercel.app/'
      },
      {
        icon: 'github',
        tooltip: '깃허브',
        href: 'https://github.com/7eveloper/fillurpill'
      },
      {
        icon: 'notion',
        tooltip: '노션',
        href: 'https://www.notion.so/399f3df2ecb1413a9258eb11074ad080?p=d9662c270d9a458198818e4c093aff74&pm=c'
      }
    ]
  }
];
