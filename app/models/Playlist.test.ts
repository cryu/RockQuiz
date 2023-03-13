import { PlaylistModel } from "./Playlist"

test("can be created", () => {
  const instance = PlaylistModel.create({})

  expect(instance).toBeTruthy()
})
