import { useApplication } from '#/hooks';
import {
  BookOpen,
  Bot,
  GalleryVerticalEnd,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

export const useFetchSidebarData = () => {
  const { name } = useApplication();
  const user = {
    name: '老中医·黄',
    email: 'tcm@example.com',
    avatar: '/avatars/frog.jpg',
  };

  const logoItem = {
    name,
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  };

  const navMain = [
    {
      title: '仪表板',
      url: '/dashboard',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: '分析页',
          url: '/dashboard/analysis',
        },
        {
          title: '工作台',
          url: '/dashboard/workbench',
        },
      ],
    },
    {
      title: 'Models',
      url: '#',
      icon: Bot,
      items: [
        {
          title: 'Genesis',
          url: '#',
        },
        {
          title: 'Explorer',
          url: '#',
        },
        {
          title: 'Quantum',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
        {
          title: 'Get Started',
          url: '#',
        },
        {
          title: 'Tutorials',
          url: '#',
        },
        {
          title: 'Changelog',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
        {
          title: 'Limits',
          url: '#',
        },
      ],
    },
  ];

  return {
    name,
    navMain,
    user,
    logoItem,
  };
};
