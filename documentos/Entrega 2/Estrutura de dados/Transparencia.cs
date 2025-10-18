
using System;
namespace EDDS.cs
{
    class Transparência : Atividade
    {
        private string titulo;
        private string nome;
        private int id;
        private int quantiadearquivos;
        private Arquivospdf[] pdf; 

      public Transparência()
        {
            this.titulo = "Sem Título";
            this.id = 0;
            this.nome = "arquivo0";
            this.pdf = new Arquivospdf[40];
        }
        public Transparência(string titulo, int id)
        {
            this.titulo = titulo;
            this.id = id;
            this.nome = "arquivo" + id;
            pdf = new Arquivospdf[40];
        }

        public bool adicionarpdf(int id, string nome)
        {
            
            if (quantiadearquivos >= pdf.Length)
            {
                Console.WriteLine("Erro: Limite de arquivos atingido.");
                return false;
            }

            Arquivospdf apdf = new Arquivospdf();
            apdf.Setid(id);      
            apdf.Setnome(nome);  

            pdf[quantiadearquivos] = apdf;
            quantiadearquivos++;
            return true;
        }
        public void Bubble_sort()
        {
            int i, y;
            Arquivospdf auxiliar;
            int q = quantiadearquivos;

           
            for (i = q - 1; i > 0; i--)
            {
                
                for (y = 0; y < i; y++) 
                {
                   
                    if (pdf[y].Maior(pdf[y + 1]))
                    {
                       
                        auxiliar = pdf[y];
                        pdf[y] = pdf[y + 1];
                        pdf[y + 1] = auxiliar;
                    }
                }
            }
        }
    }
}




      