"use client";

import { useState } from "react";

const SearchProduct = ({ fetchProduct }: { fetchProduct: any }) => {
  const [search, setSearch] = useState("");
  return (
    <form>
      <input
        type="text"
        name="search"
        id=""
        placeholder="Search..."
        className="bg-red-800 mt-52"
      />
    </form>
  );
};

export default SearchProduct;
