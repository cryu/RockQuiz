import { v4 as uuidv4 } from "uuid"
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { PlaylistModel } from "./Playlist"

/**
 * Model description here for TypeScript hints.
 */
export const QuizModel = types
    .model("Quiz")
    .props({
        id: types.optional(types.identifier, uuidv4),
        title: "",
        // playlists: types.array(PlaylistModel),
        // contestants: types.array(types.string),
    })
    .actions(withSetPropAction)
    .views(self => ({
        // get numberSongs() {
        //     return self.playlists.map(pl => pl.numberSongs).reduce((prev, next) => prev + next)
        // },
        // get numberSongsCompleted() {
        //     return self.playlists
        //         .map(pl => pl.numberSongsCompleted)
        //         .reduce((prev, next) => prev + next)
        // },
    })) // eslint-disable-line @typescript-eslint/no-unused-vars
    .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Quiz extends Instance<typeof QuizModel> {}
export interface QuizSnapshotOut extends SnapshotOut<typeof QuizModel> {}
export interface QuizSnapshotIn extends SnapshotIn<typeof QuizModel> {}
export const createQuizDefaultModel = () => types.optional(QuizModel, {})

export const QuizStoreModel = types
    .model("QuizStore")
    .props({
        quizes: types.array(QuizModel),
    })
    .actions(withSetPropAction)
    .views(store => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
    .actions(store => ({
        add(data: QuizSnapshotIn) {
            store.quizes.push(QuizModel.create(data))
        },
        remove(quiz: Quiz) {
            store.quizes.remove(quiz)
        },
    }))

export interface QuizStore extends Instance<typeof QuizStoreModel> {}
export interface QuizStoreSnapshot extends SnapshotOut<typeof QuizStoreModel> {}

// @demo remove-file
