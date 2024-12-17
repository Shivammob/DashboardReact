import { useNavigate } from "react-router-dom";

export const signIn = (userData) => {

  const navigate = useNavigate()

  return async (dispatch) => {
    
  };
};

// export const fetchUser = () => {
//   return async (dispatch) => {
//     try {
//       const response = await fetch("http://localhost:5000/user", {
//         method: "GET",
//         credentials: "include", // Include cookies with the request
//       });
//       if (response.ok) {
//         const data = await response.json();
//         dispatch(userLogSuccess(data));
//       } else {
//         dispatch(userLogFailure("Failed to fetch user data"));
//       }
//     } catch (error) {
//       dispatch(userLogFailure("Error fetching user data:", error));
//     }
//   };
// };

export const handleSignOut = () => {
  return async (dispatch) => {
    
  };
};
