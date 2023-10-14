import { redirect } from 'next/navigation';

const Home = () => {
  redirect('/search');

  return null;
};

export default Home;
