import {useEffect} from 'react';
import Link from 'next/link';
import Layout from '../components/layouts/Layout';

const IndexPage = () => {
  useEffect(() => {
    const handleMessage = (_event, args) => alert(args);

    // add a listener to 'message' channel
    global.ipcRenderer.addListener('message', handleMessage);

    return () => {
      global.ipcRenderer.removeListener('message', handleMessage);
    };
  }, []);

  const onSayHiClick = () => {
    global.ipcRenderer.send('message', 'hi from next');
  };

  return (
    <Layout>
      <h1 className='text-primary'>Hello Next.js 👋</h1>
      <button onClick={onSayHiClick}>Say hi to electron</button>
      <p>
        <Link href='/about'>About</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
