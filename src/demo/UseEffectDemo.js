import React from "react";
import axios from "axios";

const UseEffectDemo = () => {
  const [repositories, setRepositories] = React.useState([]);

  return (
    <div>
      <div>
        <h2>Repositories</h2>
        <div>
          <ul>
            {repositories.map(repository => (
              <li key={repository.id}>{repository.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UseEffectDemo;

// AFTER

// const UseEffectDemo = () => {
//   const supportedGithubUsers = ["erlanggatjhie", "internev"];
//   const [userName, setUserName] = React.useState("erlanggatjhie");
//   const [repositories, setRepositories] = React.useState([]);

//   React.useEffect(() => {
//     axios
//       .get(`https://api.github.com/users/${userName}/repos`)
//       .then(repositories => {
//         setRepositories(repositories.data);
//       });
//   }, [userName]);

//   return (
//     <div>
//       <select value={userName} onChange={e => setUserName(e.target.value)}>
//         {supportedGithubUsers.map(githubUser => (
//           <option value={githubUser} key={githubUser}>
//             {githubUser}
//           </option>
//         ))}
//       </select>
//       <div>
//         <h2>Repositories</h2>
//         <div>
//           <ul>
//             {repositories.map(repository => (
//               <li key={repository.id}>{repository.name}</li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
