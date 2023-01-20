import React from 'react'
import styled from 'styled-components'

const Login = () => {

    const handleClick = () => {
        // const client_id = 'bb5df5929f7c433097db1beab6459909'
        // const client_id = 'b5356dda07ad44339fa50fad4b0fb75e'
        const client_id = 'cc84de451fc542d8a37eb499346c869f'
        const redirect_uri = "http://localhost:3000/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-private",
            "user-read-email",
            "user-modify-playback-state",
            "user-read-playback-state",
            "user-read-currently-playing",
            "user-read-recently-played",
            "user-top-read",
        ]
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;

    }

    return (
        <Container>
            <img
                src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
                alt="spotify"
            />
            <button onClick={handleClick}>Connect Spotify</button>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #1db954;
  gap: 5rem;
  img {
    height: 20vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #49f585;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  } `

export default Login
