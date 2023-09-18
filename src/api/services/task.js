
import api, { ENDPOINT } from "..";

export async function getOneTask(kode){
    try {
        const response = await api.get(`${ENDPOINT.TASKS}/kode/${kode}`)
        return response.data
    } catch (error) {
        throw error
    }
}