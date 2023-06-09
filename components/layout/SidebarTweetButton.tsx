import { useRouter } from 'next/router';
import { FaFeather } from 'react-icons/fa';

const SidebarTweetButton = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push('/')}>
      <div className="mt-6 flex aspect-square w-14 cursor-pointer items-center justify-center rounded-full bg-sky-500 p-4 transition hover:bg-opacity-80 lg:hidden">
        <FaFeather size={24} color="white" />
      </div>
      <div className="mt-6 hidden cursor-pointer rounded-full bg-sky-500 px-4 py-2 transition hover:bg-opacity-80 lg:block">
        <span className="hidden text-center text-xl font-semibold text-white lg:block">Tweet</span>
      </div>
    </div>
  );
};

export default SidebarTweetButton;
