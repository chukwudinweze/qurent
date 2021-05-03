import React from "react";
import PageHeader from "../components/PageHeader";
import PostProperty from "../components/PostProperty";

const PostAdd = () => {
  return (
    <section ClassName="post__add">
      <PageHeader titleLeft="post ad" titleRight="clear" />
      <PostProperty />
    </section>
  );
};

export default PostAdd;
