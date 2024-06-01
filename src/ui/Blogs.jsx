function Blogs({ data }) {
  const { id, content, userId, IsPrivate, userName } = data;

  if (IsPrivate) return null;
  // h-[15rem] w-[30rem]
  return (
    <ul className=" m-6  flex h-40 w-screen flex-col justify-between rounded-lg bg-c-black px-3 py-4 font-redit text-xl  text-slate-200 transition-all duration-300 ease-linear hover:-translate-y-4 md:m-10 md:w-auto md:gap-10 ">
      <li className="justify-self-stretch">
        <div className="flex justify-between text-base">
          <h4>{userName}</h4>
          <p>{'public'}</p>
        </div>
      </li>
      <li className="-translate-y-2">
        <div>
          <p className="">{content}</p>
        </div>
      </li>
    </ul>
  );
}

export default Blogs;
