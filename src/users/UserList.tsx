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

      <p>
        Enhance the UserList component to implement the specified
        functionalities, ensuring that the component is robust, user-friendly,
        and follows best practices.
      </p>

      <p>
        <p></p>
        1. Display User Details:
        <ul>
          <li>Display a list of users fetched from the API.</li>
          <li>Each user item should show the name and email of the user.</li>
        </ul>
      </p>

      <p>
        2. Navigate to Posts:
        <ul>
          <li>
            Implement a function to navigate to a posts route when a user item
            is clicked.
          </li>
          <li>
            The posts route should display all posts associated with the
            selected user.
          </li>
        </ul>
      </p>

      <p>
        3. Filter Users:
        <ul>
          <li>
            Implement a search functionality to filter users based on the search
            string.
          </li>
          <li>
            Ensure the search input is functional and filters the user list in
            real-time.
          </li>
        </ul>
      </p>

      <p>
        4. Align User Details:
        <ul>
          <li>
            Align user details to the left and any other attributes (like the
            number of posts) to the right.
          </li>
        </ul>
      </p>

      <p>
        5. Cleanup Fetch Call:
        <ul>
          <li>
            Ensure the fetch call is cleaned up by aborting it when the
            component is unmounted.
          </li>
        </ul>
      </p>

      <p>
        6. Implement Search Component:
        <ul>
          <li>
            Include a search component that allows users to search for specific
            users by name or email.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default UserList;
