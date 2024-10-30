function userStatus(isMember: boolean) {
    return isMember ? 'Member' : 'Guest';
}

const getDummy = (thisStatus: boolean) => {
    return (
        userStatus(thisStatus)
        )
    }    

    export const curStatus = getDummy(true);


// const createMagic = () => {
//     return (
//       typeof window !== "undefined" &&
//       new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
//     );
//   };
  
//   export const magic = createMagic();
  