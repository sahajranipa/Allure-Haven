"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="flex">
      <Image
        className="w-full h-full object-cover"
        src="/images/signup-image.jpg"
        width={800}
        height={800}
      />
      <Card className="w-full max-w-md dark:bg-gray-400 dark:text-white">
        <CardHeader>
          <CardTitle className="font-Heading text-xl">Sign Up</CardTitle>
          <CardDescription className="font-Body">
            Create your account to get started your masculine journey.
          </CardDescription>
        </CardHeader>
        <form className="flex flex-col gap-4 items-center justify-center  bg-white p-6 rounded-lg dark:bg-gray-400 dark:text-white">
          <div className="flex flex-col gap-4 justify-start w-full">
            <Label className="font-Heading" htmlFor="name">
              Name
            </Label>
            <Input
              className="w-full rounded-lg bg-white p-5 text-sm font-Body"
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-4 justify-start w-full">
            <Label className="font-Heading" htmlFor="email">
              Email
            </Label>
            <Input
              className="w-full rounded-lg bg-white p-5 text-sm font-Body"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-4 justify-start w-full">
            <Label className="font-Heading" htmlFor="password">
              Password
            </Label>
            <Input
              className="w-full rounded-lg bg-white p-5 text-sm font-Body"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex flex-col gap-4 justify-start w-full">
            <Label className="font-Heading" htmlFor="confirm_password">
              Confirm Password
            </Label>
            <Input
              className="w-full rounded-lg bg-white  p-5 text-sm font-Body"
              type="password"
              name="confirm_password"
              id="confirm_password"
              placeholder="Enter your confirm password"
              required
            />
          </div>
          <div className="flex flex-col gap-4 justify-start w-full">
            <Label className="font-Heading" htmlFor="phone_no">
              Phone Number
            </Label>
            <Input
              className="w-full rounded-lg bg-white p-5 text-sm font-Body"
              type="tel"
              name="phone_no"
              id="phone_no"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <Button className="w-full rounded-lg bg-primary p-6 text-sm font-Body mt-3">
            Sign Up
          </Button>
        </form>
        <CardFooter className="flex flex-col gap-4 justify-start w-full">
          <p className="text-sm text-gray-500 font-Heading">
            Already have an account?{" "}
            <Link className="underline underline-offset-2" href="/sign-in">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
