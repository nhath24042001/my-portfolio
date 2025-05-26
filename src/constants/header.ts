import { House, Code, BriefcaseBusiness,GraduationCap, FolderGit2, Mail    } from 'lucide-react';


export const NAV_LIST = [
    {
        id: 'home',
        icon: House,
        text: 'Home',
        path: '/'
    },
    {
        id: 'skills',
        icon: Code,
        text: 'Skills',
        path: '/skills',
    },
    {
        id: 'experience',
        icon: BriefcaseBusiness,
        text: 'Experience',
        path: '/experience'
    },
    {
        id: 'education',
        icon: GraduationCap,
        text: 'Education',
        path: '/education'
    },
    {
        id: 'projects',
        icon: FolderGit2,
        text: 'Projects',
        path: '/projects'
    },
    {
        id: 'contact',
        icon: Mail,
        text: 'Contact',
        path: '/contact'
    }
]