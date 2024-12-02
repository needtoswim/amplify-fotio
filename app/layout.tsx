'use client'
import Footer from './ui/footer'
import Header from './ui/header'
import { Hub } from 'aws-amplify/utils';
import SaveUser from './lib/localstore'

interface User {
  username: string;
  userid: string;
  email: string;
}

Hub.listen('auth', (eventdata) => {
  // const userName = eventdata.payload.data.username
  // console.log("userName", userName)
  // const userId = eventdata.payload.data.userId
  // console.log("userId", userId)
  // const loginId = eventdata.payload.data.signInDetails.loginId
  // console.log("LoginId", loginId)

  const currentUser: User = {
    "username": eventdata.payload.data.username,
    "userid": eventdata.payload.data.userId,
    "email": eventdata.payload.data.loginId
  };
  console.log("Sign in user", currentUser)
  SaveUser(currentUser)

  // console.log("Event",eventdata.payload.event)
});
//import { Authenticator } from '@aws-amplify/ui-react';
//import  Navbar  from './components/layout/navbar'
//import { inter } from '@/app/ui/fonts';

// export const metadata = {
//   title: 'fotio-4',
// }


export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <>
      {/* <Authenticator> */}
      <html lang='en'
               className={`h-full scroll-smooth antialiased`}>
       
         <body className='flex h-full flex-col text-stone-700'>
              
              <Header/>
                {children}
              <Footer/>
            
        </body>
        
        </html>
        {/* </Authenticator> */}
    
   </>   
  )
}