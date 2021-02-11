export const SignOut = (props) => {

    const signOut = () => {
        props.auth.signOut();
    }

    return props.auth.currentUser && (
        <button onClick={signOut}>Sign Out</button>
    )
}