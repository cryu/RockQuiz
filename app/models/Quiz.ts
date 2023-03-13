import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PlaylistModel } from "./Playlist"

/**
 * Model description here for TypeScript hints.
 */
export const QuizModel = types
    .model("Quiz")
    .props({
        title: types.string,
        playlists: types.array(PlaylistModel),
        contestants: types.array(types.string),
    })
    .actions(withSetPropAction)
    .views(self => ({
        get numberSongs() {
            return self.playlists.map(pl => pl.numberSongs).reduce((prev, next) => prev + next)
        },
        get numberSongsCompleted() {
            return self.playlists
                .map(pl => pl.numberSongsCompleted)
                .reduce((prev, next) => prev + next)
        },
    })) // eslint-disable-line @typescript-eslint/no-unused-vars
    .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Quiz extends Instance<typeof QuizModel> {}
export interface QuizSnapshotOut extends SnapshotOut<typeof QuizModel> {}
export interface QuizSnapshotIn extends SnapshotIn<typeof QuizModel> {}
export const createQuizDefaultModel = () => types.optional(QuizModel, {})
