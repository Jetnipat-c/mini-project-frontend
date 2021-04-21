import Layout from "../Layout/layout"
import withAuth from "../Layout/withAuth"

const Admin = () => {
    return <div className="text-lg"><Layout>admin</Layout></div>
}
export default withAuth(Admin)