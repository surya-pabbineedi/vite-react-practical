import React, { useEffect, useState } from "react";
import useFetch from "../shared/hooks/use-fetch";
import Search from "./Serach";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";
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
  } = useFetch(USERS_URL);

  // 5. cleanup the fetch call - abort the fetch call when the component is unmounted

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (!users) {
    return <div>No users found</div>;
  }

  const handleSearch = (searchString: string) => {
    // 3. filter users based on search string
  };

  const navigateToPosts = (userId: number) => {
    // 2. navigate to posts route
  };

  return (
    <div>
      {/* 6. Search is not functional */}
      <Search onSearch={handleSearch} />
      {/* 4. Add user search  */}
      {users.length > 0 && (
        <ul>
          {users.map((incomingUser: User) => (
            <div key={incomingUser.id}>
              {incomingUser.name}
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
