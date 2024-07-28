import { MdDelete } from 'react-icons/md';
import useDeleteById from '../service/useDeleteById';

function UserBlog({ data }) {
  const { mutate, isLoading } = useDeleteById();

  const { IsPrivate, userName, userId, content, id } = data;
  return (
    // mx-4 my-8 h-[15rem]
    <ul className="my-8 flex h-40 w-full flex-col justify-evenly rounded-lg bg-c-black px-3 py-4 font-redit text-xl  text-slate-200 transition-all duration-300 ease-linear hover:-translate-y-4   ">
      <li className="">
        <div className="flex text-base">
          <h4>{userName}</h4>
          <p>{IsPrivate === true ? 'private ' : 'public'}</p>
        </div>
      </li>
      <li className="--10">
        <div>
          <p className="block">{content}</p>
        </div>
      </li>
      <li className="flex justify-end">
        <button
          disabled={isLoading}
          onClick={() => mutate(id)}
          className="self-end justify-self-end text-white"
        >
          {<MdDelete />}
        </button>
      </li>
    </ul>
  );
}

export default UserBlog;
