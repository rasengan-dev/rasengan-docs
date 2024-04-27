import { createClient } from "@supabase/supabase-js";
// import { config } from "dotenv";

// config();

// const { NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY } = process.env;

export const supabase = createClient(
  "https://rlswqxwlwjaofvewupli.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJsc3dxeHdsd2phb2Z2ZXd1cGxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMjk2NTAsImV4cCI6MjAyOTgwNTY1MH0.GA7AO1x2gY3mYAu_oJ5OTFn-3vgQIBemHOB8QdSK5U4"
);
