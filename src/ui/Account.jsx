import ToggleSwitch from '@trendmicro/react-toggle-switch';
import '@trendmicro/react-toggle-switch/dist/react-toggle-switch.css';
import toast from 'react-hot-toast';

import { useState } from 'react';
import { useUploadDump } from '../service/useUploadDump';
import { useCurrAuth } from '../service/useCurrAuth';
import { useCurrUserId } from '../service/useCurrUserId';
import PersonalBlogs from './PersonalBlogs';
import Spinner from './Spinner';

function Account() {
  // state
  const [isMessage, setIsMessage] = useState('');
  const [isCheck, setIsCheck] = useState(false);
  // curr user
  const { data, isLoading: isUser } = useCurrUserId();
  // uploading
  const { isDumping, isLoading } = useUploadDump();
  const { isCurrUser, isLoading: isCurrLoading } = useCurrAuth();
  if (isCurrLoading || isLoading || isUser) return <Spinner />;

  const { id } = isCurrUser;

  let nameStorage;

  const { email, name } = isCurrUser.user_metadata;
  if (
    email.includes('@gmail.com')
      ? (nameStorage = email.replace(/@gmail.com/g, ''))
      : null
  )
    if (name ? (nameStorage = name) : null);

  function handleSubmit(e) {
    e.preventDefault();

    if (isMessage.length <= 2)
      return toast.error('Message should contain atleast 8 characters');
    if (!isMessage || !id) return;

    isDumping({ isMessage, id, isCheck, nameStorage });
    setIsMessage('');
    //
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-6/12">
        <form className="flex w-full flex-col gap-2" onSubmit={handleSubmit}>
          <label className="my-10 text-2xl font-semibold text-slate-200">
            Your Thoughts
          </label>
          <textarea
            disabled={isLoading}
            value={isMessage}
            onChange={(e) => setIsMessage(e.target.value)}
            className="w-full rounded-md p-3 font-redit"
            placeholder="Drop your thoughts and publish"
          />
          <div>
            <button
              disabled={isLoading}
              type="submit"
              className="my-6 w-6/12 text-ellipsis bg-c-black p-4 font-bold text-slate-200 transition-all duration-300 ease-linear hover:opacity-80 "
            >
              Start Dump
            </button>
          </div>
        </form>
        <div className="self-start">
          <ToggleSwitch
            checked={isCheck}
            onChange={() => setIsCheck((isCheck) => !isCheck)}
          />
          <span className="mx-2 text-2xl text-slate-200">Private</span>
        </div>
      </div>
      <div></div>
      <PersonalBlogs />
    </div>
  );
}

export default Account;
