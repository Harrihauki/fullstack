const Notification = ({ message, error }) => {
    const notificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        barderRadius: 5,
        padding: 10,
        marginBotton: 10
    }

    const errorStyle = {
        color: 'red',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        barderRadius: 5,
        padding: 10,
        marginBotton: 10
    }
    
    if (message === null) {
        console.log("notification on null");
        return null
    }

    if (error) {
        console.log("notification on error");
        return (
            <div style={errorStyle}>
                <br />
                {message}
            </div>
        )
    } else {
        console.log("notification ei ole error");
        console.log(message);
        return (
            <div style={notificationStyle}>
                <br />
                {message}
            </div>
        )
    }

}

export default Notification