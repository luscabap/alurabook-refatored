import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { ICategoriaProps } from "../interface/ICategoriaProps";
import { ILivroProps } from "../interface/ILivroProps";

const http = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

http.interceptors.request.use(
  function (config) {
    const token = sessionStorage.getItem("token");

    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    console.log("Erro no interceptor do axios: ", error);
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError) {
    if (error.response?.status === 401) {
        const navigate = useNavigate();
        navigate("/")
        return Promise.reject() 
    }
    
    return Promise.reject(error);
  }
);

export default http;

export const obterCategoriaPorSlug = async (slug: string) => {
  const resposta = await http.get<ICategoriaProps[]>('categorias', {
    params: {
      slug
    }
  })

  return resposta.data[0]
}

export const obterLivroDestaque = async (tipo: string) => {
  const resposta = await http.get<ILivroProps[]>(`/public/${tipo}`)
  return resposta.data
}

export const obterLivrosDaCategoria = async (categoria: ICategoriaProps) => {
  const resposta = await http.get<ILivroProps[]>('livros', {
    params: {
      categoria: categoria.id
    }
  })

  return resposta.data
}
