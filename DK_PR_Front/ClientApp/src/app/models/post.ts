
    export class Post
    {
      private postId: number = -1;
      public userName: string = "";
      public emojiName: string = "";
      public date: string = "";
      public postText: string = "";

      public setPost(postText: string, userName: string, emojiName: string, date: string) {
        this.postId++;
        this.userName = userName;
        this.emojiName = emojiName;
        this.date = date;
        this.postText = postText;

      }

      public getPostId(): number {
        return this.postId;
      }

    }
