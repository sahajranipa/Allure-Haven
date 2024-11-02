import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-around items-center gap-7 w-full border rounded-xl shadow-xl py-4 px-8 sm:px-20 relative">
      <div className="flex items-center w-[37%]">
        <span className="font-Heading font-extrabold text-3xl">
          ALLURE HAVEN
        </span>
      </div>
      <form action="#" className="w-full relative flex items-center">
        <Input
          className="w-full rounded-full bg-white shadow-lg p-6 text-sm font-Body"
          placeholder="Search your favourite menace products..."
          type="text"
          name="search_products"
          required
        />
        <Search className="absolute end-5 bottom-3" />
      </form>
      <div className="flex gap-4 justify-between items-center">
        <Button className="bg-secondary text-black hover:bg-black hover:text-white font-Body px-6 py-3 rounded-full border border-gray-300">
          Login
        </Button>
        <Button className="bg-primary font-Body px-6 py-3 rounded-full">
          Sign Up
        </Button>
      </div>
    </header>
  );
};

export default Header;
