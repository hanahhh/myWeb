export const userQuery = (userId) => {
    const query = `*[_type == "user" && _id == '${userId}']`;
    return query;
};

export const blogsQuery = `*[_type == "blog"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
    _id,
    title,
} `;

export const blogDetailQuery = (blogID) => {
  const query = `*[_type == "blog" && _id == '${blogID}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    content,
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};
