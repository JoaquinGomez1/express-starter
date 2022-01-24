import PostInterface from "../../interfaces/PostInterface";
import PostModel from "../../models/PostModel";

class PostService {
  async getPosts(): Promise<PostInterface[]> {
    const posts = await PostModel.find();
    return posts;
  }

  async getPost(id: string): Promise<PostInterface | null> {
    const post = await PostModel.findById(id);
    return post;
  }

  async createPost(post: PostInterface): Promise<PostInterface> {
    const newPost = new PostModel(post);
    await newPost.save();
    return newPost;
  }

  async updatePost(post: PostInterface): Promise<PostInterface> {
    const { _id } = post;
    const updatedPost = await PostModel.findByIdAndUpdate(_id, post);
    return updatedPost;
  }

  async deletePost(id: string): Promise<PostInterface | null> {
    const Post = await PostModel.findByIdAndRemove(id);
    return Post;
  }
}

export default PostService;
