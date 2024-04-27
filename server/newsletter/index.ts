import { supabase } from "server";


export const checkEmailAlreadyUsed = async (email: string) => {
  console.log(process.env)

  // check if email is already used
  const { data, error } = await supabase
    .from("newsletter")
    .select("email")
    .eq("email", email);
  
  if (data) {
    return { data: data.length > 0 };
  }

  return { error }
}

export const addNewUserToNewsletter = async (data: {
  email: string,
  username: string,
  bio?: string
}) => {
  // add new user to newsletter
  const { error } = await supabase
    .from("newsletter")
    .insert(data);
  
  if (error) {
    console.error("Error adding new user to newsletter", error);
    return { error }
  }

  return { data: "User added to newsletter" };
}