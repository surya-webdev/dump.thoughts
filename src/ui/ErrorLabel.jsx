function ErrorLabel({ error }) {
  console.log(error);
  return <span className="text-xl text-red-500">{error}</span>;
}

export default ErrorLabel;
