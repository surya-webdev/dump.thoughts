import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supabase/auth-ui-react';
import { supabase } from '../service/supabase';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import ErrorLabel from './ErrorLabel';
import { useSignup } from '../service/useSignup';

function SignUp() {
  // const [session, setSession] = useState(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session);
  //   });

  //   const {
  //     data: { subscription },
  //   } = supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });

  //   return () => subscription.unsubscribe();
  // }, []);

  // if (!session) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       <div>
  //         <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />
  //       </div>
  //     </div>
  //   );
  // } else {
  //   return navigate('/');
  // }
  const navigate = useNavigate();
  const labels = 'text-2xl font-semibold text-slate-200 ';
  const inputStyle = 'h-10 rounded-md placeholder:px-2 ';

  const { isSignupMutate, isLoading } = useSignup();

  const { register, handleSubmit, formState, getValues, reset } = useForm();

  const { errors } = formState;
  // if (!isLoading) return <p>....Loading</p>;

  function submit({ name, password, email }) {
    isSignupMutate({ name, password, email }, { onSettled: reset() });
  }

  return (
    <div className=" my-[8rem] flex w-screen flex-col items-center justify-center">
      <div>
        <h2 className="my-10 text-3xl font-semibold text-slate-200">
          Create your Account
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex w-[25rem] flex-col gap-4 "
      >
        <label htmlFor="name" className={labels}>
          Your Name
        </label>
        <input
          disabled={isLoading}
          id="name"
          type="text"
          className={inputStyle}
          placeholder="surya"
          {...register('name', { required: 'this field required' })}
        />
        {errors?.name && <ErrorLabel error={errors?.name?.message} />}
        <label htmlFor="email" className={labels}>
          Email
        </label>
        <input
          disabled={isLoading}
          id="email"
          type="text"
          className={inputStyle}
          placeholder="eg:you@gmail.com"
          {...register('email', {
            required: 'this field required',
            pattern: /\S+@\S+\.\S+/,
            message: 'please enter the correct email ',
          })}
        />
        {errors?.email && <ErrorLabel error={errors?.email?.message} />}
        <label htmlFor="password" className={labels}>
          Password
        </label>
        <input
          disabled={isLoading}
          id="password"
          className={inputStyle}
          placeholder="password"
          type="password"
          {...register('password', { required: 'this field required' })}
        />
        {errors?.password && <ErrorLabel error={errors?.password?.message} />}
        <label htmlFor="repeatpassword" className={labels}>
          Repeat Password
        </label>
        <input
          disabled={isLoading}
          id="repeatpassword"
          className={inputStyle}
          placeholder="repeat your password"
          type="password"
          {...register('repeatpassword', {
            required: 'this field required',
            validate: (value) =>
              value === getValues().password || "Passord isn't match ",
          })}
        />
        {errors?.repeatpassword && (
          <ErrorLabel error={errors?.repeatpassword?.message} />
        )}

        <div>
          <button
            disabled={isLoading}
            type="submit"
            className="rounded-md bg-c-black p-4 text-xl text-slate-50 transition-all hover:opacity-90"
          >
            Sign Up
          </button>
        </div>
      </form>
      <p className={labels + 'my-10 text-xl'}>
        if you already have account {''}{' '}
        <a
          className="cursor-pointer px-1 text-c-black underline"
          onClick={() => navigate('/login')}
        >
          login
        </a>
      </p>
    </div>
  );
}

export default SignUp;
