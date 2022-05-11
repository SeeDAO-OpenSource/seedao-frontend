import request from "@/utils/request";

export async function getActivities(params) {
    return request.get('/events', params)
}

export async function getHighlights(params) {
    return request.get('/highlights', params)
}

export async function getPoaps(params) {
    return request.get('/poaps', params)
}