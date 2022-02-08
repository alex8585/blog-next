import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const getTagsThunk = createAsyncThunk('tags/getTags', async () => {
  const response = await axios.get(API_URL + '/tags')
  return response
})
