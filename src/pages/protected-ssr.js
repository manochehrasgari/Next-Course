import Layout from "@/containers/Layout/Layout";
import { getSession, useSession } from "next-auth/react";

const ProtectedSSR = () => {
    const {data:session} = useSession()
    
    return ( 
        <Layout>
            <h1>{session.user.name}, Wellcome To Protected SSR Page</h1>
        </Layout>
     );
}
 
export default ProtectedSSR;



export async function getServerSideProps(ctx){
    const session = await getSession(ctx)

    if(!session){
        return {
            redirect : {
                destination : "api/auth/signin?callbackUrl=http://localhost:3000/protected-ssr",
                permanent : false
            }
        }
    }

    return {
        props : {
            session
        }
    }
}