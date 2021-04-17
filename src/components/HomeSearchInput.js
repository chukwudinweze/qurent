import React from "react";

const HomeSearchInput = () => {
  return (
    <form>
      <input type="text" value={text} onChange={(e) => setState(text)} />
    </form>
  );
};

export default HomeSearchInput;
