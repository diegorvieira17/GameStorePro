import Especificacoes from "@/core/produto/Especificacoes";
import Precificavel from "@/core/produto/Precificavel";

export default interface Produto extends Precificavel {
    id: number
    nome: string
    descricao : string
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]
    especificacoes: Especificacoes
}