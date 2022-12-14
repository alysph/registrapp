
export interface UserI {
  nombre: string;
  apellido: string;
  correo: string;
  uid: string;
  password: string;
  perfil: 'estudiante' | 'docente',
}

export interface RespuestaToHeadLines {

  status: string;

  totalResults: number;

  articles: Article[];

}

export interface Article {

  source: Source;

  author?: string;

  title: string;

  description: string;

  url: string;

  urlToImage?: string;

  publishedAt: string;

  content: string;

}

export interface Source {

  id?: string;

  name: string;

}
