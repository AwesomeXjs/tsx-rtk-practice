import { createSlice } from '@reduxjs/toolkit'

interface errorState {
	error: string
}

const initialState: errorState = {
	error: '',
}

const errorSlice = createSlice({
	name: 'errorSlice',
	initialState,
	reducers: {},
})

export default errorSlice.reducer
