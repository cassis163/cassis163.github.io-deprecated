import { NextPage } from "next";
import { useEffect, useState } from "react"
import Container from "../components/Container";
import useFetch, { CachePolicies, IncomingOptions } from "use-http"

const USER_ID = "118346776"
// TODO: Go to https://soundcloud.com/you/apps and create a client ID
const CLIENT_ID = ""

type Track = {
  collection: {
    uri: string
    title: string
  }
}

const Music: NextPage = () => {
  const options: IncomingOptions = {
    cacheLife: 0,
    cachePolicy: CachePolicies.NO_CACHE
  }
  const { loading, error, data } = useFetch<Track[]>(`https://api.soundcloud.com/users/${USER_ID}/tracks?client_id=${CLIENT_ID}`, options, [])

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <Container>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error.name} - {error.message}</p> : null}
      {data?.map(track => {
        return <p key="track.collection.title">{track.collection.uri}</p>
      })}
    </Container>
  )
}

export default Music;
