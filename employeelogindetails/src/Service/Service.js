import axios from "axios";

export async function GetEmpDetails() {
  try {
    let response = await axios.get("http://192.168.1.105:3001/Form");

    return response.data;
  } catch (error) {
    return error;
  }
}

export async function EditEmpDetails(id) {
  try {
    let response = await axios.get("http://192.168.1.105:3001/Form/" + id);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function PutEmpDetails(form) {
  try {
    let response = await axios.put(
      "http://192.168.1.105:3001/Form/" + form.id,
      form
    );
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function PostEmpDetails(form) {
  try {
    let response = await axios.post("http://192.168.1.105:3001/Form/", form);
    return response.data;
  } catch (error) {
    return error;
  }
}

export async function DeleteEmpDetails(id) {
  try {
    let response = await axios.delete("http://192.168.1.105:3001/Form/" + id);
    return response.data;
  } catch (error) {
    return error;
  }
}
