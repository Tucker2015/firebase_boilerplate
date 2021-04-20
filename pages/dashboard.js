import { useUser } from '../firebase/useUser'
import WriteToCloudFirestore from '../components/cloudFirestore/Write'
import ReadFromCloudFirestore from '../components/cloudFirestore/Read'
import Counter from '../components/realtimeDatabse/Counter'
import UploadFile from '../components/storage/UploadFile'

const Dashboard = () => {

    const { user, logout } = useUser()

    if (user) {
        return (
            <>
                <h1> DashBoard </h1>
                <h1>Welcome Back {user.name}</h1>
                <h3>{user.email}</h3>
                <WriteToCloudFirestore />
                <ReadFromCloudFirestore />
                <Counter id={user.id} />
                <button className="btn" onClick={() => logout()}>Log Out</button>
                <UploadFile />
                <p><a href="/">Back to Home</a></p>

            </>
        )
    } else

        return (
            <>
                <h1>Please Sign In</h1>
                <p className="btn"><a href="/auth">Log in</a></p>
            </>
        )
}

export default Dashboard