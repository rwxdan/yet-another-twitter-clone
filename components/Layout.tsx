import Head from 'next/head';
import FollowBar from './layout/FollowBar';
import Sidebar from './layout/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>BlueBird</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" sizes="16x16" />
      </Head>
      <div className="h-screen bg-black px-6">
        <div className="container mx-auto h-full max-w-6xl xl:px-32">
          <div className="grid h-full grid-cols-4">
            <Sidebar />
            <div className="col-span-3 border-x-[1px] border-neutral-800 lg:col-span-2">{children}</div>
            <FollowBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
