import Link from 'next/link';

interface Props {
  isCurrent: boolean;
  displayName: string; 
  href: string;
  count: number;
}

export const CategoryButton = ({ isCurrent, displayName, href, count}: Props) => {
  return (
    <li>
      <Link href={href} className={isCurrent ? 'active' : ''}>
        {displayName} ({count})
      </Link>
    </li>
  )
}