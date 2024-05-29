import { supabase } from './supabase';

export async function getThoughts() {
  let { data: thoughts, error } = await supabase.from('thoughts').select('*');
  console.log(thoughts);
  if (error) {
    console.error(error.message);
    throw new Error();
  }

  return thoughts;
}

// export async function uploadThoughts({ isDumping, sub }) {
//   console.log(isDumping);
//   const { data, error } = await supabase
//     .from('thoughts')
//     .insert([{ content: isDumping, sub }])
//     .select();
//   if (error) {
//     console.error(error.message);
//     throw new Error();
//   }

//   return data;
// }

export async function uploadDump({ isDumping, sub }) {
  const { data, error } = await supabase
    .from('thoughts')
    .insert([{ content: isDumping, userId: sub }])
    .select();

  if (error) {
    console.error(error.message);
    throw new Error();
  }

  return data;
}
// authentication
// //////////////////////////////////////////////////////////////////////
export async function newUser({ email, password, name }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    data: {
      fullName: name,
      avatar: '',
    },
  });

  if (error) {
    console.error(error.message);
    throw new Error();
  }

  return data;
}

export async function loginUser({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error(error.message);
    throw new Error();
  }

  return data;
}
export async function currUserAuth() {
  const { data } = await supabase.auth.getSession();

  if (!data) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  return user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
}
