// function Post({ title, date, author, text, image, highlights }) {
// access the title, author and text of each sample post.
//   return (
//     <article>
//       <h2>{title}</h2>
//       <h3>Date: {date}</h3>
//       <h4>Author: {author}</h4>
//       <h5>
//         Highlights:{" "}
//         {highlights.map((post) => {
//           return <li>{post}</li>;
//         })}
//       </h5>
//       <p>{text}</p>
//       <img src={image} alt="A pigeon" width="300px" />
//     </article>
//   );

import React from "react";
import "./List-item.css";

function ListItem({ id, text, removeFromList }) {
  return (
    <li>
      {text}
      <button onClick={() => removeFromList(id)}>X</button>
    </li>
  );
}

export default ListItem;
