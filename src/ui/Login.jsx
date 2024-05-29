import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import ErrorLabel from './ErrorLabel';
import { useLogin } from '../service/useLogin';

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState, reset } = useForm();
  const labels = 'text-2xl font-semibold text-slate-200 ';
  const inputStyle = 'h-10 rounded-md placeholder:px-2 ';

  const { isLoginMutate, isLoading } = useLogin();
  const { errors } = formState;

  function submit({ email, password }) {
    isLoginMutate({ email, password });
  }

  return (
    <div className=" my-[8rem] flex w-screen flex-col items-center justify-center">
      <div>
        <h2 className="my-10 text-3xl font-semibold text-slate-200">
          Login to your Account
        </h2>
      </div>
      <form
        onSubmit={handleSubmit(submit)}
        className="flex w-[25rem] flex-col gap-4 "
      >
        <label htmlFor="email" className={labels}>
          Email
        </label>
        <input
          disabled={isLoading}
          id="email"
          type="email"
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
          {...register('password', { required: 'Enter the password' })}
        />
        {errors?.password && <ErrorLabel error={errors?.password?.message} />}
        <div>
          <button
            disabled={isLoading}
            className="rounded-md bg-c-black p-4 text-xl text-slate-50 transition-all hover:opacity-90"
          >
            {isLoading ? '...loading' : 'Login'}
          </button>
        </div>
      </form>
      <p className={labels + 'my-10 text-xl'}>
        if you Doesn&apos;t have account {''}{' '}
        <a
          className="cursor-pointer text-c-black underline"
          onClick={() => navigate('/signup')}
        >
          Sign Up
        </a>
      </p>
    </div>
  );
}

export default Login;
