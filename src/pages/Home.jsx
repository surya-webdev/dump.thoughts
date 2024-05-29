import useThoughts from '../service/useThoughts';
import Blogs from '../ui/Blogs';

function Home() {
  const { data, isLoading } = useThoughts();
  console.log(data);
  if (isLoading) return <div className="h-3 w-fit animate-spin "></div>;

  return (
    <>
      <div className="mx-2 grid auto-cols-auto items-center justify-center gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   ">
        {data.map((data) => (
          <Blogs data={data} key={data.id} />
        ))}
        {/* <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs />
        <Blogs text={'hehehheh whtasap me text and dump things to sha'} /> */}
      </div>
    </>
  );
}

export default Home;
