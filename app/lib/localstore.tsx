import secureLocalStorage from "react-secure-storage";

interface User {
    username: string;
    userid: string;
    email: string;
  }

export const SaveUser = (userDetail: User) => {
     
    const username = userDetail.username
    const userid = userDetail.userid
    const email = userDetail.email

    secureLocalStorage.clear();

    secureLocalStorage.setItem("username", username);
    secureLocalStorage.setItem("userid", userid);
    secureLocalStorage.setItem("email", email);
  };

export const RetrieveUser = () => {
    const decryptedUsername = secureLocalStorage.getItem("username") as string;
    const decryptedId = secureLocalStorage.getItem("userid") as string;
    const decryptedEmail = secureLocalStorage.getItem("email") as string;  
    const currentUser: User = {
        "username": decryptedUsername,
        "userid": decryptedId,
        "email": decryptedEmail
    };
    console.log("Current User", currentUser)
    return currentUser
};

  