type POST = {
  id: string;
  title: string;
  desc: string;
  date: Date;
};

let posts: POST[] = [];

// Handlers
export const getPosts = () => posts;

export const addPost = (post: POST) => {
  posts.push(post);
};

export const deletePost = (id: string) => {
  posts = posts.filter((post) => post.id !== id);
};

export const updatePost = (id: string, title: string, desc: string) => {
  const post = posts.find((post) => post.id === id);
  // först hittar vi id sen uppdaterar vi värderna!
  if (post) {
    post.title = title;
    post.desc = desc;
  } else {
    throw new Error("No post found");
  }
};

export const getById = (id: string) => {
  return posts.find((post) => post.id === id)
  //find by id eller vi hittar posten med id. Get request för bara en id en post.
}