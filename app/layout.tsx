'use client'
import Footer from './ui/footer'
import Header from './ui/header'
import { Hub } from 'aws-amplify/utils';

Hub.listen('auth', (data) => {
  console.log(data)
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