import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_API_URL

function arrayToTagsFilter(tags:Array<number>) {
    if (!tags) {
        return ""
    }
    return tags.map((val) =>  val).join(",")

}

interface PortfolioQuery {
    page?: number
    perPage?: number
    tags?: number[]
}
interface PortfoliosResp {
    page: number
    perPage : number
    data: []
    total:number
}


export const getPortfoliosThunk = createAsyncThunk<PortfoliosResp,PortfolioQuery> (
    "portfolios/getPortfolios",
    async ({ page = 1, perPage = 5, tags = [] }, thunkAPI) => {
        let tf = arrayToTagsFilter(tags)
        // let start = (page - 1) * perPage

        const response = await axios.get(
            API_URL +
            `/portfolios?page=${page}&perPage=${perPage}&sortBy=order_number&descending=1&tags=${tf}`
        )
        // console.log(response.data)
        let result = {
            page,
            perPage,
            data: response.data.items,
            total: response.data.total,
        }
        return result
    }
)
// export const getPortfoliosCntThunk = createAsyncThunk(
//   "portfolios/getPortfoliosCnt",
//   async (thunkAPI) => {
//     const response = await axios.get(API_URL + `/portfolios/count`)
//     return response.data
//   }
// )
