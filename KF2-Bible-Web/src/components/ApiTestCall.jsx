import axios from "axios"
import { useState } from "react"

const ApiTestCall = () => {
    const [Joke, setJoke] = useState("")
    const URLString = `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`

    const handleJokeOutput = (e) => {
        console.log("handling button...")
        axios.get((URLString))
        .then((res) => {
            console.log(res)
            setJoke(res.data.joke)
        })
        .catch(()=> {
            console.log(err)
        })
    }

    // TODO:
    // find (ideally free) data hosting
    // deploy an api with OAuth or with some sort of authentication to prevent tampering
    return (
        <div style={{width: "50vw", margin: "auto"}}>
            <h6>This is a "placeholder" for an API call</h6>
            <button onClick={(e) => handleJokeOutput(e)}>
                Give me a joke
            </button>
            <h5>The Joke:</h5>
            <p>{Joke}</p>
        </div>
    )
}

export default ApiTestCall