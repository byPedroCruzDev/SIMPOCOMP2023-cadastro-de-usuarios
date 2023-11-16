import { deleteUserServices } from "../services/deleteUserServices.js";

export const deleteUserController = (request, response) => {
  const [status] = deleteUserServices(request.params.id);

  return response.status(status).json();
};
