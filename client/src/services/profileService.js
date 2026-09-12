import api from "./api";

export const getProfiles = () => {
    return api.get("/profiles");
};