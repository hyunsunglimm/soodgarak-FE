import Image from 'next/image';

const SearchIcon = ({ ...props }) => {
  return (
    <Image src='/icons/search.png' alt='search icon' width={32} height={32} {...props} priority />
  );
};

export default SearchIcon;
