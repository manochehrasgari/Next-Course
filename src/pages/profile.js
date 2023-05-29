import Layout from "@/containers/Layout/Layout";
import { signIn, useSession } from "next-auth/react";

const Profile = () => {


    const { data:session, status } = useSession({
        required: true,
        onUnauthenticated() {
          signIn()
        },
      })

      if (status === "loading") {
        return <Layout>
            <div>Loading</div>
        </Layout>
      }

    return ( 
        <Layout>
            <div>{session.user.name}, Wellcome To Profile Page</div>
        </Layout>
     );
}
 
export default Profile;