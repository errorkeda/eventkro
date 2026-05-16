import {
  FaArchway,
  FaBaby,
  FaBirthdayCake,
  FaBriefcase,
  FaCalendarCheck,
  FaCamera,
  FaGift,
  FaHeart,
  FaImages,
  FaLeaf,
  FaSun,
  FaStar,
} from 'react-icons/fa';

const iconClass = 'text-5xl';
const iconClassLg = 'text-6xl';

export const serviceIconMapSm: Record<string, JSX.Element> = {
  roka: <FaCalendarCheck className={`${iconClass} text-[#ff5722]`} />,
  tilak: <FaGift className={`${iconClass} text-[#ffc107]`} />,
  haldi: <FaSun className={`${iconClass} text-[#e91e63]`} />,
  mehendi: <FaLeaf className={`${iconClass} text-[#4caf50]`} />,
  photoshoot: <FaCamera className={`${iconClass} text-[#3f51b5]`} />,
  'balloon-decoration': <FaStar className={`${iconClass} text-[#e91e63]`} />,
  'birthday-balloon-decoration': (
    <FaBirthdayCake className={`${iconClass} text-[#ff5722]`} />
  ),
  'balloon-arch': <FaArchway className={`${iconClass} text-[#9c27b0]`} />,
  'balloon-backdrop-wall': <FaImages className={`${iconClass} text-[#2196f3]`} />,
  'wedding-balloon-decoration': <FaHeart className={`${iconClass} text-[#e91e63]`} />,
  'baby-shower-balloon-decoration': <FaBaby className={`${iconClass} text-[#00bcd4]`} />,
  'balloon-bouquet': <FaGift className={`${iconClass} text-[#ff9800]`} />,
  'corporate-balloon-decoration': (
    <FaBriefcase className={`${iconClass} text-[#607d8b]`} />
  ),
};

export const serviceIconMapLg: Record<string, JSX.Element> = {
  roka: <FaCalendarCheck className={`${iconClassLg} text-[#ff5722]`} />,
  tilak: <FaGift className={`${iconClassLg} text-[#ffc107]`} />,
  haldi: <FaSun className={`${iconClassLg} text-[#e91e63]`} />,
  mehendi: <FaLeaf className={`${iconClassLg} text-[#4caf50]`} />,
  photoshoot: <FaCamera className={`${iconClassLg} text-[#3f51b5]`} />,
  'balloon-decoration': <FaStar className={`${iconClassLg} text-[#e91e63]`} />,
  'birthday-balloon-decoration': (
    <FaBirthdayCake className={`${iconClassLg} text-[#ff5722]`} />
  ),
  'balloon-arch': <FaArchway className={`${iconClassLg} text-[#9c27b0]`} />,
  'balloon-backdrop-wall': <FaImages className={`${iconClassLg} text-[#2196f3]`} />,
  'wedding-balloon-decoration': <FaHeart className={`${iconClassLg} text-[#e91e63]`} />,
  'baby-shower-balloon-decoration': <FaBaby className={`${iconClassLg} text-[#00bcd4]`} />,
  'balloon-bouquet': <FaGift className={`${iconClassLg} text-[#ff9800]`} />,
  'corporate-balloon-decoration': (
    <FaBriefcase className={`${iconClassLg} text-[#607d8b]`} />
  ),
};

export function ServiceIcon({
  id,
  size = 'sm',
}: {
  id: string;
  size?: 'sm' | 'lg';
}) {
  const map = size === 'lg' ? serviceIconMapLg : serviceIconMapSm;
  return map[id] ?? <FaStar className={size === 'lg' ? iconClassLg : iconClass} />;
}
