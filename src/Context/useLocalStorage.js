import React from "react"

function useLocalStorage(itemName, initialValue) {   
    const [user, setUser] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            try {
                const localStorageItem = localStorage.getItem(itemName)
                let parsedItem;
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    parsedItem = initialValue
                } else {
                    parsedItem = JSON.parse(localStorageItem)
                    setUser(parsedItem)
                }
                setLoading(false)

            } catch (error) {
                setError(true)
                setLoading(false)
            }

        }, 1000)
            //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setUser(newItem)
    }
    return { user, saveItem, loading, error }
}
export { useLocalStorage }