import React from "react"
import Comment from "./Comment";
import CommentList from "./CommentList";

const commentsData = [
    {
      name: "Vishal",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Vishal",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Vishal",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Vishal",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Vishal",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Vishal",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Vishal",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Vishal",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Vishal",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Vishal",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Vishal",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Vishal",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Vishal",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
];

const CommentContainer = () => {
    return <div className="m-2 px-3">
        <h1 className="text-2xl font-semibold">Comments :</h1>
        <CommentList comments={commentsData} />
    </div>
}

export default CommentContainer;