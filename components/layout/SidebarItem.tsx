import { IconType } from 'react-icons/lib';

interface SidebarItemProps {
  label: string;
  href: string;
  icon: IconType;
  onClick?: () => void;
}
const SidebarItem: React.FC<SidebarItemProps> = ({ label, href, icon: Icon, onClick }) => {
  return (
    <div className="flex flex-row items-center">
      <div className="relative flex aspect-square w-14 cursor-pointer items-center justify-center rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden">
        <Icon size={28} color="white" />
      </div>
      <div className="relative hidden cursor-pointer items-center gap-4 rounded-full p-4 hover:bg-slate-300 hover:bg-opacity-10 lg:flex">
        <Icon size={24} color="white" />
        <span className="hidden text-xl text-white lg:inline">{label}</span>
      </div>
    </div>
  );
};

export default SidebarItem;
