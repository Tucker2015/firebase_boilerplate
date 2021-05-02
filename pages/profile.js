import { useUser } from '../firebase/useUser'
import Layout from '../components/layouts/Layout'

const Profile = () => {
    // Fetch the user client-side
    const { user, logout } = useUser()

    // Server-render loading state
    if (!user || user.isLoggedIn === false) {
        return <h1>Loading...</h1>
    }

    // Once the user request finishes, show the user
    return (
        <>
            <h1>Your Profile</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    )
}

export default Profile