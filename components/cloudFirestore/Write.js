import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const WriteToCloudFirestore = () => {

    const { user } = useUser()

    const sendData = () => {
        try {
            firebase
                .firestore()
                .collection('my_collection')
                .doc(user.id)
                .set({
                    name: (user.name),
                    id: (user.id)
                })
                .then(alert('Data was sent'))
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (

        <>
            <button onClick={sendData}>Send Data</button>
        </>
    )
}
export default WriteToCloudFirestore