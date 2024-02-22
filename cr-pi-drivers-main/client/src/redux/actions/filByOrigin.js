export const GET_BY_ORIGIN = "GET_BY_ORIGIN";

export const filByOrigin = (drivers) => {
    return{
        type: GET_BY_ORIGIN,
        payload: drivers
    }
}