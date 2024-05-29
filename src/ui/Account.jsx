import { useState } from 'react';

function Account() {
  const [isMessage, setIsMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(isMessage);
    setIsMessage('');
  }

  return (
    <div className="flex items-center justify-center">
      <div className="w-6/12">
        <form
          className="flex w-full flex-col gap-2 text-center"
          onSubmit={handleSubmit}
        >
          <label className="my-10 text-2xl font-semibold text-slate-200">
            Your Thoughts
          </label>
          <textarea
            value={isMessage}
            onChange={(e) => setIsMessage(e.target.value)}
            className="w-full rounded-md p-3 font-redit"
            placeholder="Drop your thoughts and publish"
          />
          <div>
            <button
              type="submit"
              className="my-6 w-6/12 text-ellipsis bg-c-black p-4 font-bold text-slate-200 transition-all duration-300 ease-linear hover:opacity-80 "
            >
              Start Dump
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// bg-red-800
export default Account;