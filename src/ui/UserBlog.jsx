function UserBlog({ data }) {
  const { IsPrivate, userName, userId, content } = data;
  return (
    <ul className="mx-4 my-8 flex h-[15rem] w-[30rem] flex-col justify-between rounded-lg bg-c-black px-3 py-4 font-redit  text-2xl text-slate-200 transition-all duration-300 ease-linear hover:-translate-y-4 ">
      <li className="justify-self-stretch">
        <div className="flex justify-between text-base">
          <h4>{userName}</h4>
          <p>{IsPrivate === true ? 'private ' : 'public'}</p>
        </div>
      </li>
      <li className="-translate-y-10">
        <div>
          <p className="">{content}</p>
        </div>
      </li>
    </ul>
  );
}

export default UserBlog;
