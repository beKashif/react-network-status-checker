import React, { useState, useEffect } from 'react'

const NetworkStatus = () => {

    //  set variable to track online/offline status
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    //  useEffect hook to add event listners for online/offline status
    useEffect(() => {
        function handleNetworkChange() {
            // update the status
            setIsOnline(navigator.onLine);
        }

        //   add event listeners for online/offline events
        window.addEventListener("online", handleNetworkChange);
        window.addEventListener("offline", handleNetworkChange);

        // cleanup function to remove event listeners when the component unmounts
        return () => {
            window.removeEventListener("online", handleNetworkChange);
            window.removeEventListener("offline", handleNetworkChange);
        }
    }, [])

    return (
        <div className={`flex min-h-screen items-center justify-center ${isOnline ? 'bg-blue-950' : 'bg-red-950'}`}>
            <div className={`p-10 rounded-lg text-white font-semibold text-xl ${isOnline ? 'bg-blue-500' : 'bg-red-500'} animate-fade-in`}>
                {isOnline ? (
                    <p className='text-3xl'>You are online 😍</p>
                ) : (
                    <p className='text-3xl'>You are offline 😑</p>
                ) }
            </div>
        </div>
    )
}

export default NetworkStatus