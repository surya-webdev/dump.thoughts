import useThoughts from '../service/useThoughts';
import Blogs from '../ui/Blogs';

function Home() {
  const { data, isLoading } = useThoughts();

  if (isLoading) return <div className="h-3 w-fit animate-spin "></div>;

  return (
    <>
      <div className=" mx-[2rem]  grid w-full  overflow-x-hidden  px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        {data.map((data) => (
          <Blogs data={data} key={data.id} />
        ))}
      </div>
    </>
  );
}

export default Home;
