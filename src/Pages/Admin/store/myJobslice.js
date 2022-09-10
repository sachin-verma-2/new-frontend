// import { createSlice } from "@reduxjs/toolkit";


// export const STATUSES = Object.freeze({
//     IDLE: 'idle',
//     LOADING: 'loading',
//     ERROR: 'error',
// });

// const myJobslice = createSlice({
//     name: 'jobcart',
//     initialState: {
//         data: [],
//         status: STATUSES.IDLE,
//     },
//     reducers: {
//         setJobs(state, action) {
//             state.data = action.payload;
//         },
//         setStatus(state, action) {
//             state.status = action.payload
//         },
//         remove(state, action) {
//             return state.filter((item) => item.id !== action.payload)
//         },
//     }
// })
// export const { setJobs, remove, setStatus } = myJobslice.actions;
// export default myJobslice.reducer;

// //Thunks
// export function fetchJobs() {
//     return async function fetchJobsThunk(dispatch, getState) {
//         dispatch(setStatus(STATUSES.LOADING))
//         try {
//             const res = await fetch('');
//             const data = await res.json();
//             dispatch(setJobs(data));
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (err) {
//             console.log(err)
//             dispatch(STATUSES.ERROR)
//         }
//     }
// }