import { type NextPage } from "next";
import React from "react";
import Menu from "@nsui/react/menu/Menu";

const index: NextPage = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Menu value="test" />
      </main>
    </>
  );
};

export default index;
