
    export class Post
    {
      public postId: number = -1;
      public userName: string = "";
      public emojiName: string = "";
      public date: string = "";
      public postText: string = "";

      public setPost(postId: number, userName: string, emojiName: string, date: string, postText: string) {
        this.postId = postId;
        this.userName = userName;
        this.emojiName = emojiName;
        this.date = date;
        this.postText = postText;
      }

    }
