export const getNowPlaying = async () => {
  return {
    status: 204,
    json: () => Promise.resolve({ isPlaying: false }),
  }
}

export const getTopTracks = async () => {
  return {
    status: 204,
    json: () => Promise.resolve({ tracks: [] }),
  }
}
