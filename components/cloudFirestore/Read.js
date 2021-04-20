import firebase from 'firebase/app'
import 'firebase/firestore'
import { useUser } from '../../firebase/useUser'

const ReadFromCloudFirestore = () => {

    const { user } = useUser()
    const readData = () => {
        try {
            firebase
                .firestore()
                .collection('my_collection')
                .doc(user.id)
                .onSnapshot(function (doc) {
                    console.log(doc.data())
                })
            alert('Data was received and your id is ' + user.id + 'and your name is ' + user.name)
        } catch (error) {
            console.log(error)
            alert(error)
        }
    }
    return (
        <button onClick={readData}>Read Data</button>
    )

}

export default ReadFromCloudFirestore