import React, { useEffect } from "react";
import useFetch from "../shared/hooks/use-fetch";

import { UserContext } from "./UserContext";

export interface User {
  id: number;
  name: string;
  email: string;
}

const UserList: React.FC = () => {
  const {
    response: users,
    loading,
    error,
    abortController,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    return () => {
      abortController?.abort();
    };
  }, [abortController]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (!users) {
    return <div>No users found</div>;
  }

  const navigateToPosts = (userId: number) => {
    // 2. navigate to posts route
  };

  return (
    <div>
      {/* 4. Add user search  */}
      {users.length > 0 && (
        <ul>
          {users.map((incomingUser: User) => (
            <div key={incomingUser.id}>
              <div>{incomingUser.name}</div>
              {/* <UserContext.Provider> */}
				{/* 1. display user item showing the name/email of the user */}

				{/* 2. display number of posts associated the current user. 
					Click behavior should navigate to posts route showing all the posts associated to current user */}
				{/* implement and use navigateToPosts method - the component should use context and communicate parent to use navigateToPosts */}

				{/* 3. user details should be aligned to left and any other attributes should align to right */}
              {/* </UserContext.Provider> */}
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
