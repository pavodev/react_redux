import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timePosted="Today at 4:45PM"
          text="Nice blog post!"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timePosted="Today at 7:00PM"
          text="Very nice post, you are so smart!"
          img={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timePosted="Today at 9:32PM"
          text="Not really.."
          img={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

// styling done by using the library: https://semantic-ui.com/
