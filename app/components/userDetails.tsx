import { getCurrentUser } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

async function userDetails() {
    let userDet = "Not Signed In"
    try {
        const { username, userId, signInDetails } = await getCurrentUser();
               userDet = username
               return userDet
       
    } catch (error) {
        console.log(error);
    }
      
}

export const currUser = userDetails();

// function userStatus(isMember: boolean) {
//     return isMember ? 'Member' : 'Guest';
// }

// const getDummy = (thisStatus: boolean) => {
//     return (
//         userStatus(thisStatus)
//         )
//     }    

//     export const curStatus = getDummy(true);
