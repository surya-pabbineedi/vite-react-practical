import { createContext, useContext } from "react";
import { User } from "./UserList";

interface UserContextProps {
	incomingUser: User | null;
	navigateToPosts: (userId: number) => void;
}
export const UserContext = createContext<UserContextProps>({
	incomingUser: null,
	navigateToPosts: () => {},
});

export const useUserContext = () => useContext(UserContext);
