import Button from "@components/atoms/Button";
import Input, { TextArea } from "@components/atoms/Input";
import Newsletter from "contexts/Newsletter";
import useTheme from "hooks/useTheme";
import { useRouter } from "next/router";
import { Link } from "nextra-theme-docs";
import { useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import { addNewUserToNewsletter, checkEmailAlreadyUsed } from "server/newsletter";
import { twMerge } from "tailwind-merge";
import { checkEmail } from "utils/check";

export default function NewsletterForm() {
  // Router
  const router = useRouter();
  
  // Context
  const { email } = useContext(Newsletter);

  // theme
  const { isDark } = useTheme();

  // Local state
  const [data, setData] = useState<{ [key: string]: string }>({ email });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!email) return;

    if (checkEmail(email)) {
      const username = email.split("@")[0];

      handleChange('username', username);
    }
  }, [email]);

  // Handlers
  const handleChange = (key: string, value: string) => {
    if (key === "bio" && value.length > 500) return; 

    setData((prev) => ({ ...prev, [key]: value }));
  }

  const verifyData = () => {
    const { email, username, bio } = data;

    if (!email || !username) return false;

    if (!checkEmail(email)) return false;

    if (username.length < 2) return false;

    if (!bio) return true;

    if (bio && bio.length > 500) return false;

    return true;
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!verifyData()) return;

    setIsSubmitting(true);

    // Check if the username is not been used
    const { data: response, error } = await checkEmailAlreadyUsed(data["email"]);

    if (!error) {
      if (response) {
        toast.warning("Email already used, please change it !")
      } else {
        const { error } = await addNewUserToNewsletter({
          email: data["email"],
          username: data["username"],
          bio: data["bio"],
        });

        if (!error) {
          toast.success("You are now subscribed to the newsletter !");

          router.push("/");
        } else {
          toast.error("Oups ! There is something wrong")
        }
      }
    } else {
      toast.error("Oups ! There is something wrong")
    }

    setIsSubmitting(false);
  }

  return (
    <form className="w-full md:w-[600px] mt-12">
      <div className="mb-8">
        <label htmlFor="email" className="mb-2">
          Email *
        </label>
        <Input
          name="email"
          placeholder="Your email address"
          value={data["email"]}
          onChange={(e) => handleChange("email", e.target.value)}
          message="Provide a valid email and receive news!"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="username" className="mb-2">
          Username *
        </label>
        <Input
          name="username"
          placeholder="How do we call you ?"
          value={data["username"]}
          onChange={(e) => handleChange("username", e.target.value)}
          message="At least 2 characters"
        />
      </div>

      <div className="mb-8">
        <label htmlFor="bio" className="mb-2">
          Bio {" "} <small>({ data["bio"] ?  data["bio"].length : "0" } / 500)</small>
        </label>
        <TextArea
          name="bio"
          placeholder="Tell us something about you"
          value={data["bio"]}
          onChange={(e) => handleChange("bio", e.target.value)}
          message="Up to 500 characters"
        />
      </div>

      <div className="mb-8 flex items-center justify-between">
        <Link href="/docs">
          <Button
            text="Cancel"
            className={twMerge(
              "w-auto sm:w-auto",
              isDark
                ? " bg-primary text-white border-primary hover:bg-primary-600 hover:border-primary-600"
                : "bg-white text-black border-gray hover:border-gray hover:bg-[#eee]"
            )}
          />
        </Link>

        <Button text={isSubmitting ? "Sending request...":"Subscribe"} disabled={!verifyData() || isSubmitting} onClick={handleSubmit} />
      </div>
    </form>
  );
}
