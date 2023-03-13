import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const PlaylistModel = types
    .model("Playlist")
    .props({
        title: types.string,
        url: types.string,
        numberSongs: types.integer,
        numberSongsCompleted: 0,
    })
    .actions(withSetPropAction)
    .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
    .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Playlist extends Instance<typeof PlaylistModel> {}
export interface PlaylistSnapshotOut extends SnapshotOut<typeof PlaylistModel> {}
export interface PlaylistSnapshotIn extends SnapshotIn<typeof PlaylistModel> {}
export const createPlaylistDefaultModel = () => types.optional(PlaylistModel, {})
