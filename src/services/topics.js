import {get} from "@/tools/request"

export function topics(query) {
    return get('/topics', query)
}
export function topicsDetail(id) {
    return get(`/topic/${id}`)
}

